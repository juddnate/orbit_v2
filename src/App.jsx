import { useState, useEffect } from "react";
import TitleBar from "./components/TitleBar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import StatsBar from "./components/StatsBar.jsx";
import KanbanBoard from "./components/KanbanBoard.jsx";
import AddTaskModal from "./components/AddTaskModal.jsx";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [targetColumn, setTargetColumn] = useState("backlog");
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Runs once when the app first loads — fetches tasks from Neon via the API
  useEffect(() => {
    fetch("/api/tasks")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load tasks:", err);
        setLoading(false);
      });
  }, []);

  function openModal(column) {
    setTargetColumn(column);
    setModalOpen(true);
  }

  async function addTask(newTask) {
    const res = await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: newTask.title,
        col: targetColumn,
        tag: newTask.tag,
        date: newTask.date,
      }),
    });
    const saved = await res.json();
    setTasks([...tasks, saved]);
    setModalOpen(false);
  }

  async function toggleComplete(id) {
    const task = tasks.find((t) => t.id === id);
    const res = await fetch("/api/tasks", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, complete: !task.complete }),
    });
    const updated = await res.json();
    setTasks(tasks.map((t) => (t.id === id ? updated : t)));
  }

  async function deleteTask(id) {
    await fetch("/api/tasks", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    setTasks(tasks.filter((t) => t.id !== id));
  }

  if (loading) {
    return (
      <div className="app-wrapper">
        <p style={{ color: "var(--text-muted)", padding: "20px" }}>
          Loading Orbit...
        </p>
      </div>
    );
  }

  return (
    <div className="app-wrapper">
      <TitleBar />

      <button
        className={
          sidebarOpen
            ? "sidebar-toggle-floating"
            : "sidebar-toggle-floating sidebar-toggle-shifted"
        }
        aria-label="Toggle sidebar"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className="app-shell">
        <Sidebar isOpen={sidebarOpen} />

        <main className="main-content">
          <StatsBar tasks={tasks} />
          <KanbanBoard
            tasks={tasks}
            onAddClick={openModal}
            onComplete={toggleComplete}
            onDelete={deleteTask}
          />
        </main>
      </div>

      {modalOpen && (
        <AddTaskModal onSubmit={addTask} onClose={() => setModalOpen(false)} />
      )}
    </div>
  );
}

export default App;

import { useState } from "react";
import TitleBar from "./components/TitleBar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import StatsBar from "./components/StatsBar.jsx";
import KanbanBoard from "./components/KanbanBoard.jsx";
import AddTaskModal from "./components/AddTaskModal.jsx";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [targetColumn, setTargetColumn] = useState("backlog");

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Design logo variants",
      column: "backlog",
      tag: "ui",
      date: "Jun 14",
      complete: false,
    },
    {
      id: 2,
      title: "Build kanban layout",
      column: "inprogress",
      tag: "css",
      date: "Jun 8",
      complete: false,
    },
    {
      id: 3,
      title: "Set up repo",
      column: "done",
      tag: "copy",
      date: "May 11",
      complete: true,
    },
  ]);

  function openModal(column) {
    setTargetColumn(column);
    setModalOpen(true);
  }

  function addTask(newTask) {
    setTasks([
      ...tasks,
      { ...newTask, id: Date.now(), column: targetColumn, complete: false },
    ]);
    setModalOpen(false);
  }

  function toggleComplete(id) {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, complete: !t.complete } : t)),
    );
  }

  function deleteTask(id) {
    setTasks(tasks.filter((t) => t.id !== id));
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

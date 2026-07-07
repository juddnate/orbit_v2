import { useState } from "react";
import TitleBar from "./components/TitleBar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import StatsBar from "./components/StatsBar.jsx";
import KanbanBoard from "./components/KanbanBoard.jsx";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

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
          <StatsBar />
          <KanbanBoard />
        </main>
      </div>
    </div>
  );
}

export default App;

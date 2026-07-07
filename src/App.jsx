import { useState } from "react";
import TitleBar from "./components/TitleBar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import StatsBar from "./components/StatsBar.jsx";
import KanbanBoard from "./components/KanbanBoard.jsx";

function App() {
  return (
    <div className="app-shell">
      <Sidebar />
      <main className="main-content">
        <TitleBar />
        <StatsBar />
        <KanbanBoard />
      </main>
    </div>
  );
}

export default App;

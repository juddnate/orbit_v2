function StatsBar({ tasks }) {
  const backlogCount = tasks.filter((t) => t.col === "backlog").length;
  const inProgressCount = tasks.filter((t) => t.col === "inprogress").length;
  const doneCount = tasks.filter((t) => t.col === "done").length;
  const total = tasks.length;
  const pct = total > 0 ? Math.round((doneCount / total) * 100) : 0;

  return (
    <div className="stats-bar">
      <div className="stat-card">
        <span className="stat-label">Backlog</span>
        <span className="stat-value">{backlogCount}</span>
      </div>
      <div className="stat-card">
        <span className="stat-label">In Progress</span>
        <span className="stat-value">{inProgressCount}</span>
      </div>
      <div className="stat-card">
        <span className="stat-label">Done</span>
        <span className="stat-value">{doneCount}</span>
      </div>
      <div className="stat-card">
        <span className="stat-label">Complete</span>
        <span className="stat-value">{pct}%</span>
      </div>
    </div>
  );
}

export default StatsBar;

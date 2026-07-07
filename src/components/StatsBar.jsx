function StatsBar() {
  return (
    <div className="stats-bar">
      <div className="stat-card">
        <span className="stat-label">Backlog</span>
        <span className="stat-value">0</span>
      </div>
      <div className="stat-card">
        <span className="stat-label">In Progress</span>
        <span className="stat-value">0</span>
      </div>
      <div className="stat-card">
        <span className="stat-label">Done</span>
        <span className="stat-value">0</span>
      </div>
      <div className="stat-card">
        <span className="stat-label">Complete</span>
        <span className="stat-value">0%</span>
      </div>
    </div>
  );
}

export default StatsBar;

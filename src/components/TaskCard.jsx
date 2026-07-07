function TaskCard() {
  return (
    <div className="task-card">
      <div className="card-top">
        <p className="task-title">Sample task</p>
        <span className="card-tag tag-css">css</span>
      </div>
      <div className="card-bottom">
        <p className="task-date">Jun 20</p>
        <div className="card-actions">
          <div className="chk"></div>
          <button className="delete-btn">&#x2715;</button>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;

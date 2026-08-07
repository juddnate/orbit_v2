function TaskCard({ task, onComplete, onDelete }) {
  return (
    <div className={task.complete ? "task-card done-card" : "task-card"}>
      <div className="card-top">
        <p className="task-title">{task.title}</p>
        <span className={`card-tag tag-${task.tag}`}>{task.tag}</span>
      </div>
      <div className="card-bottom">
        <p className="task-date">{task.date}</p>
        <div className="card-actions">
          <div
            className={task.complete ? "chk on" : "chk"}
            onClick={() => onComplete(task.id)}
          ></div>
          <button className="delete-btn" onClick={() => onDelete(task.id)}>
            &#x2715;
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;

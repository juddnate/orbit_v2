import TaskCard from "./TaskCard.jsx";

function KanbanBoard({ tasks, onAddClick, onComplete, onDelete }) {
  const backlogTasks = tasks.filter((t) => t.column === "backlog");
  const inProgressTasks = tasks.filter((t) => t.column === "inprogress");
  const doneTasks = tasks.filter((t) => t.column === "done");

  return (
    <div className="kanban-board">
      <div className="kanban-column">
        <div className="column-header">
          <h2>Backlog</h2>
          <span className="col-count">{backlogTasks.length}</span>
        </div>
        <div className="column-body">
          {backlogTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onComplete={onComplete}
              onDelete={onDelete}
            />
          ))}
        </div>
        <div className="column-footer">
          <button
            className="add-task-btn"
            onClick={() => onAddClick("backlog")}
          >
            + Add Task
          </button>
        </div>
      </div>

      <div className="kanban-column">
        <div className="column-header">
          <h2>In Progress</h2>
          <span className="col-count">{inProgressTasks.length}</span>
        </div>
        <div className="column-body">
          {inProgressTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onComplete={onComplete}
              onDelete={onDelete}
            />
          ))}
        </div>
        <div className="column-footer">
          <button
            className="add-task-btn"
            onClick={() => onAddClick("inprogress")}
          >
            + Add Task
          </button>
        </div>
      </div>

      <div className="kanban-column">
        <div className="column-header">
          <h2>Done</h2>
          <span className="col-count">{doneTasks.length}</span>
        </div>
        <div className="column-body">
          {doneTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onComplete={onComplete}
              onDelete={onDelete}
            />
          ))}
        </div>
        <div className="column-footer">
          <button className="add-task-btn" onClick={() => onAddClick("done")}>
            + Add Task
          </button>
        </div>
      </div>
    </div>
  );
}

export default KanbanBoard;

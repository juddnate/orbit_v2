import TaskCard from "./TaskCard.jsx";

function KanbanBoard() {
  return (
    <div className="kanban-board">
      <div className="kanban-column">
        <div className="column-header">
          <h2>Backlog</h2>
          <span className="col-count">2</span>
        </div>
        <div className="column-body">
          <TaskCard />
          <TaskCard />
        </div>
        <div className="column-footer">
          <button className="add-task-btn">+ Add Task</button>
        </div>
      </div>

      <div className="kanban-column">
        <div className="column-header">
          <h2>In Progress</h2>
          <span className="col-count">0</span>
        </div>
        <div className="column-body"></div>
        <div className="column-footer">
          <button className="add-task-btn">+ Add Task</button>
        </div>
      </div>

      <div className="kanban-column">
        <div className="column-header">
          <h2>Done</h2>
          <span className="col-count">0</span>
        </div>
        <div className="column-body"></div>
        <div className="column-footer">
          <button className="add-task-btn">+ Add Task</button>
        </div>
      </div>
    </div>
  );
}

export default KanbanBoard;

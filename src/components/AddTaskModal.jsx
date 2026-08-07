import { useState } from "react";

function AddTaskModal({ onSubmit, onClose }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [tag, setTag] = useState("css");
  const [error, setError] = useState(false);

  function handleSubmit() {
    if (title.trim() === "") {
      setError(true);
      setTimeout(() => setError(false), 400);
      return;
    }
    onSubmit({ title: title.trim(), date: date.trim() || "—", tag });
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleSubmit();
    }
  }

  return (
    <div
      className="modal-overlay open"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal" onKeyDown={handleKeyDown}>
        <div className="modal-scanline"></div>

        <div className="modal-header">
          <span className="modal-title">New Task</span>
          <button
            className="modal-close"
            onClick={onClose}
            aria-label="Close modal"
          >
            &#x2715;
          </button>
        </div>

        <div className="modal-body">
          <div className="field">
            <label>Task name</label>
            <input
              type="text"
              className={error ? "input-error" : ""}
              placeholder="What needs to be done?"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              autoFocus
            />
          </div>

          <div className="field">
            <label>Due date</label>
            <input
              type="text"
              placeholder="e.g. Jun 20"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="field">
            <label>Category</label>
            <div className="tag-options">
              {["css", "js", "ui", "copy"].map((option) => (
                <span
                  key={option}
                  className={
                    tag === option
                      ? `tag-opt tag-opt-${option} selected`
                      : `tag-opt tag-opt-${option}`
                  }
                  onClick={() => setTag(option)}
                >
                  {option}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="btn-submit" onClick={handleSubmit}>
            Launch Task
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTaskModal;

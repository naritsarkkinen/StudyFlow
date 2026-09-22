function TaskItem({ task, completeTask, deleteTask }) {
  const priority = task.priority || "Medium";

  const priorityClass =
    `priority-${priority.toLowerCase()}`;

  const statusClass =
    `status-${task.status.toLowerCase().replaceAll(" ", "-")}`;

  return (
    <article
      className={`task-item ${
        task.status === "Done" ? "completed" : ""
      }`}
    >
      <div className="task-info">
        <h3>{task.title}</h3>
        <p>{task.course}</p>
      </div>

      <div className="badges">
        <span className={`badge ${priorityClass}`}>
          {priority}
        </span>

        <span className={`badge ${statusClass}`}>
          {task.status}
        </span>
      </div>

      <p className="task-deadline">
        {task.deadline}
      </p>

      <div className="task-actions">
        {task.status !== "Done" && (
          <button
            className="complete-button"
            onClick={() => completeTask(task.id)}
          >
            Complete
          </button>
        )}

        <button
          className="delete-button"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </article>
  );
}

export default TaskItem;
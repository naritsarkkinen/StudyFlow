import TaskItem from "./TaskItem";

function TaskList({
  tasks,
  completeTask,
  deleteTask,
  filter,
  setFilter,
}) {
  return (
    <section className="task-list-section">
      <div className="task-list-header">
        <h2>Tasks</h2>

        <div className="filters">
          <button
            className={filter === "All" ? "filter-active" : ""}
            onClick={() => setFilter("All")}
          >
            All
          </button>

          <button
            className={filter === "Active" ? "filter-active" : ""}
            onClick={() => setFilter("Active")}
          >
            Active
          </button>

          <button
            className={
              filter === "Completed"
                ? "filter-active"
                : ""
            }
            onClick={() => setFilter("Completed")}
          >
            Completed
          </button>
        </div>
      </div>

      <div className="task-list">
        {tasks.length === 0 ? (
          <p className="empty-message">
            No tasks found.
          </p>
        ) : (
          tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              completeTask={completeTask}
              deleteTask={deleteTask}
            />
          ))
        )}
      </div>
    </section>
  );
}

export default TaskList;
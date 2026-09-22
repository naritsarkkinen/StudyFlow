import { useState } from "react";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [course, setCourse] = useState("");
  const [deadline, setDeadline] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title || !course || !deadline) {
      return;
    }

    addTask({
      title: title,
      course: course,
      deadline: deadline,
      priority: priority,
      status: "Not Started",
    });

    setTitle("");
    setCourse("");
    setDeadline("");
    setPriority("Medium");
  };

  return (
    <section className="task-form-section">
      <h2>Add New Task</h2>

      <form className="task-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Task title</label>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="e.g. Finish React assignment"
          />
        </div>

        <div className="form-group">
          <label>Course</label>
          <input
            type="text"
            value={course}
            onChange={(event) => setCourse(event.target.value)}
            placeholder="e.g. Cloud Services"
          />
        </div>

        <div className="form-group">
          <label>Deadline</label>
          <input
            type="date"
            value={deadline}
            onChange={(event) => setDeadline(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Priority</label>
          <select
            value={priority}
            onChange={(event) => setPriority(event.target.value)}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <button className="add-button" type="submit">
          Add Task
        </button>
      </form>
    </section>
  );
}

export default TaskForm;
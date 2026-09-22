import { useEffect, useState } from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("studyflow-tasks");

    if (savedTasks) {
      return JSON.parse(savedTasks);
    }

    return [
      {
        id: 1,
        title: "Finish React assignment",
        course: "Web Development Fundamentals",
        deadline: "2026-09-27",
        priority: "High",
        status: "In Progress",
      },
      {
        id: 2,
        title: "Update learning diary",
        course: "Cloud Services",
        deadline: "2026-10-11",
        priority: "Medium",
        status: "Not Started",
      },
      {
        id: 3,
        title: "Testing assignment",
        course: "Software Testing",
        deadline: "2026-09-28",
        priority: "Medium",
        status: "Not Started",
      },
    ];
  });

  const [filter, setFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem(
      "studyflow-tasks",
      JSON.stringify(tasks)
    );
  }, [tasks]);

  const completeTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, status: "Done" }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(
      tasks.filter((task) => task.id !== id)
    );
  };

  const addTask = (newTask) => {
    const task = {
      id: Date.now(),
      ...newTask,
    };

    setTasks([...tasks, task]);
  };

  const completedTasks = tasks.filter(
    (task) => task.status === "Done"
  ).length;

  const courses = new Set(
    tasks.map((task) => task.course)
  ).size;

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Active") {
      return task.status !== "Done";
    }

    if (filter === "Completed") {
      return task.status === "Done";
    }

    return true;
  });

  return (
    <div className="app">
      <header>
        <h1>StudyFlow</h1>
        <p>Your personal university study manager</p>
      </header>

      <main>
        <h2 className="dashboard-title">Dashboard</h2>

        <section className="welcome-card">
          <h3>Welcome to StudyFlow</h3>
          <p>
            Keep your courses, tasks and deadlines under control.
          </p>
        </section>

        <section className="stats">
          <div className="stat-card">
            <h3>Tasks</h3>
            <p>{tasks.length}</p>
          </div>

          <div className="stat-card">
            <h3>Completed</h3>
            <p>{completedTasks}</p>
          </div>

          <div className="stat-card">
            <h3>Courses</h3>
            <p>{courses}</p>
          </div>
        </section>

        <TaskForm addTask={addTask} />

        <TaskList
          tasks={filteredTasks}
          completeTask={completeTask}
          deleteTask={deleteTask}
          filter={filter}
          setFilter={setFilter}
        />
      </main>
    </div>
  );
}

export default App;
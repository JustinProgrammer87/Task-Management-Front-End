import React, { useState } from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import SearchBar from "./components/SearchBar";
import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom';

function App() {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const addTask = (taskText) => {
    const newTask = { id: Date.now(), text: taskText, isCompleted: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <h1>Task Management App</h1>
        <AddTask onAdd={addTask} />
        <SearchBar onSearch={(query) => setSearchQuery(query)} />
        <Routes>
          <Route path="/" element={
            <TaskList
              tasks={tasks.filter((task) =>
                task.text.toLowerCase().includes(searchQuery.toLowerCase())
              )}
              onToggleTask={toggleTask}
              onDeleteTask={deleteTask}
            />
          } />
          {/* Add more <Route> elements here as needed */}
        </Routes>
      </header>
    </div>
  );
}

export default App;

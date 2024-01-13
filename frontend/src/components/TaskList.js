import React, { useEffect, useState } from 'react';
import TaskItem from './TaskItem';
import axios from '../api/axios'; 

function TaskList({ onToggleTask, onDeleteTask }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('/tasks')
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error('Error fetching tasks:', error);
      });
  }, []);

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem 
          key={task.id} 
          task={task} 
          onToggle={onToggleTask} 
          onDelete={onDeleteTask} 
        />
      ))}
    </div>
  );
}

export default TaskList;

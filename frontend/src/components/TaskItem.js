import React from 'react';

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className="task-item">
      <span 
        style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}
        onClick={() => onToggle(task.id)}
      >
        {task.text}
      </span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
}

export default TaskItem;

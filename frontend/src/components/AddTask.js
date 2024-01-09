import React, { useState } from 'react';

function AddTask({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    onAdd(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Create a new task" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
      />
      <button type="submit">Create</button>
    </form>
  );
}

export default AddTask;

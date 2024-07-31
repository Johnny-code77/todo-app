import React, { useState } from 'react';

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    // Prevent default action
    e.preventDefault();
    if (value.trim() === '') {
      alert('Task cannot be empty');
    } else {
      // Add todo
      addTodo(value);
      // Clear form after submission
      setValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="Add Here..."
      />
      <button type="submit" className="todo-btn">Add Task</button>
    </form>
  );
};

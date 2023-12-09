
import React, { useState } from 'react';
import './AddTodoForm.css';

const AddTodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    id: null,
    firstName: '',
    lastName: '',
    time: '',
    location: '',
    date: new Date().toISOString().split('T')[0], 
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.firstName && todo.lastName && todo.time && todo.location) {
      addTodo({
        ...todo,
        id: Date.now(),
      });
      setTodo({
        id: null,
        firstName: '',
        lastName: '',
        time: '',
        location: '',
        date: new Date(),
      });
      setSuccessMessage('Client saved successfully!');
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {successMessage && <p className="success-message">{successMessage}</p>}
      <div className="form-group">
        <label>First Name:</label>
        <input
          type="text"
          value={todo.firstName}
          onChange={(e) => setTodo({ ...todo, firstName: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label>Last Name:</label>
        <input
          type="text"
          value={todo.lastName}
          onChange={(e) => setTodo({ ...todo, lastName: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label>Time:</label>
        <input
          type="time"
          value={todo.time}
          onChange={(e) => setTodo({ ...todo, time: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label>Location:</label>
        <input
          type="text"
          value={todo.location}
          onChange={(e) => setTodo({ ...todo, location: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label>Date:</label>
        <input
          type="date"
          value={todo.date}
          onChange={(e) => setTodo({ ...todo, date: e.target.value })}
        />
      </div>
      <button className="update-button" type="submit">
        Add Client
      </button>
    </form>
  );
};

export default AddTodoForm;


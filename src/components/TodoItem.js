
import React, { useState } from 'react';
import './TodoItem.css'; 

const TodoItem = ({ todo, deleteTodo, updateTodo, index, searchTerm }) => {
  const [isEditing, setEditing] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState({ ...todo });

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this client?')) {
      deleteTodo(todo.id);
      window.alert('Client deleted successfully!');
    }
  };

  const handleUpdate = () => {
    updateTodo(todo.id, updatedTodo);
    setEditing(false);
    window.alert('Client updated successfully!');
  };

  const shouldDisplay = !searchTerm || `${todo.firstName} ${todo.lastName}`
    .toLowerCase()
    .includes(searchTerm.toLowerCase());

  return shouldDisplay ? (
    <li>
      <h2>Client Details</h2>
      {isEditing ? (
        <>
          {Number.isInteger(index) ? <span>{`${index + 1}.`}</span> : null}
          <input
            type="text"
            value={updatedTodo.firstName}
            onChange={(e) => setUpdatedTodo({ ...updatedTodo, firstName: e.target.value })}
          />
          <input
            type="text"
            value={updatedTodo.lastName}
            onChange={(e) => setUpdatedTodo({ ...updatedTodo, lastName: e.target.value })}
          />
          <input
            type="text"
            value={updatedTodo.time}
            onChange={(e) => setUpdatedTodo({ ...updatedTodo, time: e.target.value })}
          />
          <input
            type="date"
            value={updatedTodo.date}
            onChange={(e) => setUpdatedTodo({ ...updatedTodo, date: e.target.value })}
          />
          <input
            type="text"
            value={updatedTodo.location}
            onChange={(e) => setUpdatedTodo({ ...updatedTodo, location: e.target.value })}
          />
          <button onClick={handleUpdate} className="update-bnt">
            Update
          </button>
        </>
      ) : (
        <>
          {Number.isInteger(index) ? <span>{`${index + 1}.`}</span> : null}
          <span>{`${todo.firstName} ${todo.lastName} - ${todo.time} - ${todo.location} - ${todo.date}`}</span>
          <button onClick={() => setEditing(true)} className="edit-bnt">
            Edit
          </button>
          <button onClick={handleDelete} className="delete-bnt">
            Delete
          </button>
        </>
      )}
    </li>
  ) : null;
};

export default TodoItem;

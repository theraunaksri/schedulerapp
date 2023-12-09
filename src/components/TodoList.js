import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import './Todolist.css';

const TodoList = ({ todos, deleteTodo, updateTodo }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTodos, setFilteredTodos] = useState(todos);

  useEffect(() => {
    const filtered = todos.filter((todo) =>
      `${todo.firstName} ${todo.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTodos(filtered);
  }, [searchTerm, todos]);

  return (
    <div>
      {todos.length > 0 && (
        <div>
          <input
            type="text"
            placeholder="Search client..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="update-button4">
            Search
          </button>
        </div>
      )}
      <ul>
        {filteredTodos.map((todo, index) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
            index={index}
            searchTerm={searchTerm}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

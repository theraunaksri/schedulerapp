
import React, { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import Calendar from './components/Calendar';
import './App.css';
import Footer from './components/footer';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, ...updatedTodo } : todo))
    );
  };

  return (
    <div className="App">
      <h1> Fitness Appointment App</h1>
      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
      <Calendar events={todos} />
      <Footer />
    </div>
  );
};

export default App;

import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo App', completed: false },
  ]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div data-testid="todo-list">
      <h1>Todo List</h1>
      <form onSubmit={addTodo} data-testid="add-form">
        <input
          data-testid="todo-input"
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new todo"
        />
        <button data-testid="add-button" type="submit">Add</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} data-testid={`todo-item-${todo.id}`}>
            <span
              data-testid={`todo-text-${todo.id}`}
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button
              data-testid={`delete-button-${todo.id}`}
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
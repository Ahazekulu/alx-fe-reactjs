import React, { useState } from 'react';

function TodoList() {
    const initialTodos = [
        { id: 1, text: 'Learn React', completed: false },
        { id: 2, text: 'Build a Todo App', completed: false },
        { id: 3, text: 'Write tests', completed: false },
    ];
    const [todos, setTodos] = useState(initialTodos);
    const [newTodoText, setNewTodoText] = useState('');

    const handleAddTodo = (e) => {
        e.preventDefault();
        if (newTodoText.trim()) {
            const newTodo = {
                id: Date.now(), // Simple way to generate a unique ID
                text: newTodoText,
                completed: false,
            };
            setTodos([...todos, newTodo]);
            setNewTodoText('');
        }
    };

    const handleToggleTodo = (id) => {
        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
    };

    const handleDeleteTodo = (id) => {
        const filteredTodos = todos.filter(todo => todo.id !== id);
        setTodos(filteredTodos);
    };

    return (
        <div>
            <h1>Todo List</h1>
            <form onSubmit={handleAddTodo}>
                <input
                    type="text"
                    placeholder="Add new todo"
                    value={newTodoText}
                    onChange={(e) => setNewTodoText(e.target.value)}
                />
                <button type="submit">Add Todo</button>
            </form>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}
                        style={{
                            textDecoration: todo.completed ? 'line-through' : 'none',
                            cursor: 'pointer'
                        }}
                    >
                        <span onClick={() => handleToggleTodo(todo.id)}>{todo.text}</span>
                        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;

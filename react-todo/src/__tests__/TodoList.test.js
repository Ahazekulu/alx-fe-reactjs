import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';
import '@testing-library/jest-dom';

describe('TodoList Component', () => {
    it('renders correctly with initial todos', () => {
        render(<TodoList />);
        expect(screen.getByRole('heading', { name: /todo list/i })).toBeInTheDocument();
        expect(screen.getByText('Learn React')).toBeInTheDocument();
        expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
        expect(screen.getByText('Write tests')).toBeInTheDocument();
    });

    it('can add a new todo', () => {
        render(<TodoList />);
        const inputElement = screen.getByPlaceholderText(/add new todo/i);
        const addButton = screen.getByRole('button', { name: /add todo/i });

        fireEvent.change(inputElement, { target: { value: 'New Todo Item' } });
        fireEvent.click(addButton);

        expect(screen.getByText('New Todo Item')).toBeInTheDocument();
    });

    it('can toggle a todo as completed', () => {
        render(<TodoList />);
        const todoText = screen.getByText('Learn React');
        expect(todoText).not.toHaveStyle('text-decoration: line-through');

        fireEvent.click(todoText);
        expect(todoText).toHaveStyle('text-decoration: line-through');

        fireEvent.click(todoText); // Toggle back
        expect(todoText).not.toHaveStyle('text-decoration: line-through');
    });

    it('can delete a todo', () => {
        render(<TodoList />);
        const todoToDelete = screen.getByText('Build a Todo App');
        const deleteButton = todoToDelete.nextSibling; // Assuming delete button is the next sibling

        fireEvent.click(deleteButton);
        expect(screen.queryByText('Build a Todo App')).not.toBeInTheDocument();
    });
});

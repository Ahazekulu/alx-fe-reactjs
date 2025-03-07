import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  // Test initial render
  test('renders initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a project')).toBeInTheDocument();
    expect(screen.getByTestId('todo-list').children).toHaveLength(2);
  });

  // Test adding a todo
  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');

    fireEvent.change(input, { target: { value: 'Test Todo' } });
    fireEvent.click(addButton);

    expect(screen.getByText('Test Todo')).toBeInTheDocument();
    expect(screen.getByTestId('todo-list').children).toHaveLength(3);
  });

  // Test toggling a todo
  test('toggles todo completion', () => {
    render(<TodoList />);
    const todoText = screen.getByTestId('todo-text-1');

    // Initial state: not completed
    expect(todoText).not.toHaveStyle('text-decoration: line-through');

    // Toggle to completed
    fireEvent.click(todoText);
    expect(todoText).toHaveStyle('text-decoration: line-through');

    // Toggle back to not completed
    fireEvent.click(todoText);
    expect(todoText).not.toHaveStyle('text-decoration: none');
  });

  // Test deleting a todo
  test('deletes a todo', () => {
    render(<TodoList />);
    const deleteButton = screen.getByTestId('delete-button-1');

    expect(screen.getByText('Learn React')).toBeInTheDocument();
    fireEvent.click(deleteButton);

    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
    expect(screen.getByTestId('todo-list').children).toHaveLength(1);
  });
});

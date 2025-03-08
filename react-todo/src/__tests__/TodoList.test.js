import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import TodoList from "../TodoList";
import "@testing-library/jest-dom";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  test("adds a new todo", async () => {
    render(<TodoList />);
    const input = screen.getByTestId("todo-input");
    const addButton = screen.getByTestId("add-button");

    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(addButton);

    await waitFor(() => {
      expect(screen.getByText("New Todo")).toBeInTheDocument();
    });
  });

  test("toggles a todo", () => {
    render(<TodoList />);
    const todoText = screen.getByTestId("todo-text-1");

    fireEvent.click(todoText);
    expect(todoText).toHaveStyle("text-decoration: line-through");

    fireEvent.click(todoText);
    expect(todoText).toHaveStyle("text-decoration: none");
  });

  test("deletes a todo", async () => {
    render(<TodoList />);
    const deleteButton = screen.getByTestId("delete-button-1");

    fireEvent.click(deleteButton);
    await waitFor(() => {
      expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
    });
  });
});

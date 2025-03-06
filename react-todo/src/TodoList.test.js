import { render, fireEvent } from "@testing-library/react";
import TodoList from "../TodoList";

test("renders initial todos", () => {
  const { getByText } = render(<TodoList />);
  expect(getByText("No todos yet")).toBeInTheDocument();
});

test("adds a new todo", () => {
  const { getByPlaceholderText, getByText } = render(<TodoList />);
  const input = getByPlaceholderText("Add a new todo");
  fireEvent.change(input, { target: { value: "New Todo" } });
  fireEvent.click(getByText("Add Todo"));
  expect(getByText("New Todo")).toBeInTheDocument();
});

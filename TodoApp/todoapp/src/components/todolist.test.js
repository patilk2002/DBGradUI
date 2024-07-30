// src/components/todolist.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TODOList from './todolist';

const mockTodos = [
  { title: "Wake up 6 AM", id: 1, is_completed: false },
  { title: "Do Exercise", id: 2, is_completed: true },
  { title: "Start Learning React", id: 3, is_completed: false },
];

describe('TODOList Component', () => {
  let setTodos;

  beforeEach(() => {
    setTodos = jest.fn();
  });

  test('renders TODOList with tasks', () => {
    render(<TODOList todos={mockTodos} setTodos={setTodos} />);
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(3);
  });

  test('renders TODOList without tasks', () => {
    render(<TODOList todos={[]} setTodos={setTodos} />);
    expect(screen.getByText('No tasks in the task list')).toBeInTheDocument();
  });

  test('edits a task', () => {
    render(<TODOList todos={mockTodos} setTodos={setTodos} />);
    fireEvent.click(screen.getAllByText('Edit')[0]);
    const input = screen.getByDisplayValue('Wake up 6 AM');
    fireEvent.change(input, { target: { value: 'Wake up 7 AM' } });
    fireEvent.blur(input);
    expect(setTodos).toHaveBeenCalledWith(expect.any(Function));
  });

  test('completes a task', () => {
    render(<TODOList todos={mockTodos} setTodos={setTodos} />);
    fireEvent.click(screen.getAllByRole('checkbox')[0]);
    expect(setTodos).toHaveBeenCalledWith(expect.any(Function));
  });

  test('deletes a task', () => {
    render(<TODOList todos={mockTodos} setTodos={setTodos} />);
    fireEvent.click(screen.getAllByText('Delete')[0]);
    expect(setTodos).toHaveBeenCalledWith(expect.any(Function));
  });

  test('renders the correct number of tasks', () => {
    render(<TODOList todos={mockTodos} setTodos={setTodos} />);
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(3);
  });

  test('task title updates correctly after editing', () => {
    render(<TODOList todos={mockTodos} setTodos={setTodos} />);
    fireEvent.click(screen.getAllByText('Edit')[0]);
    const input = screen.getByDisplayValue('Wake up 6 AM');
    fireEvent.change(input, { target: { value: 'Wake up 7 AM' } });
    fireEvent.blur(input);
    expect(setTodos).toHaveBeenCalledWith(expect.any(Function));
  });

  test('input field is focused when editing starts', () => {
    render(<TODOList todos={mockTodos} setTodos={setTodos} />);
    fireEvent.click(screen.getAllByText('Edit')[0]);
    const input = screen.getByDisplayValue('Wake up 6 AM');
    expect(input).toHaveFocus();
  });

  test('handles empty state gracefully', () => {
    render(<TODOList todos={[]} setTodos={setTodos} />);
    expect(screen.getByText('No tasks in the task list')).toBeInTheDocument();
  });

  test('renders correct completion status of a task', () => {
    render(<TODOList todos={mockTodos} setTodos={setTodos} />);
    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes[0]).not.toBeChecked();
    expect(checkboxes[1]).toBeChecked();
  });
});

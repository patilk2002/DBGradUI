// src/__tests__/todohero.test.js or src/components/todohero.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TODOHero from '../components/todohero';

describe('TODOHero Component', () => {
  
  test('renders TODOHero component', () => {
    render(<TODOHero todos_completed={0} total_todos={0} />);
    expect(screen.getByText('Task Done')).toBeInTheDocument();
  });

  test('renders correct completed tasks and total tasks', () => {
    render(<TODOHero todos_completed={3} total_todos={5} />);
    expect(screen.getByText('3/5')).toBeInTheDocument();
  });

  test('displays "Keep it Up" message', () => {
    render(<TODOHero todos_completed={0} total_todos={0} />);
    expect(screen.getByText('Keep it Up')).toBeInTheDocument();
  });

  test('handles zero completed tasks and zero total tasks', () => {
    render(<TODOHero todos_completed={0} total_todos={0} />);
    expect(screen.getByText('0/0')).toBeInTheDocument();
  });

  test('handles completed tasks greater than zero', () => {
    render(<TODOHero todos_completed={2} total_todos={5} />);
    expect(screen.getByText('2/5')).toBeInTheDocument();
  });

  test('handles total tasks equal to zero', () => {
    render(<TODOHero todos_completed={0} total_todos={0} />);
    expect(screen.getByText('0/0')).toBeInTheDocument();
  });

  test('handles more completed tasks than total tasks', () => {
    render(<TODOHero todos_completed={6} total_todos={5} />);
    expect(screen.getByText('6/5')).toBeInTheDocument();
  });

  test('renders correctly with equal completed and total tasks', () => {
    render(<TODOHero todos_completed={5} total_todos={5} />);
    expect(screen.getByText('5/5')).toBeInTheDocument();
  });

  test('displays zero completed tasks correctly', () => {
    render(<TODOHero todos_completed={0} total_todos={5} />);
    expect(screen.getByText('0/5')).toBeInTheDocument();
  });

  test('displays one completed task correctly', () => {
    render(<TODOHero todos_completed={1} total_todos={5} />);
    expect(screen.getByText('1/5')).toBeInTheDocument();
  });

});

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from '../../App';

test('test', () => {
  expect(true).toBe(true);
});

test('Should see main header', () => {
  render(<App />);
  expect(screen.getByText('Books you might like to read...')).toBeInTheDocument();
});

// test("Submit button should be enabled", () => {
//   render(<App />)

//   const button = screen.getByRole('button');
//   expect(button).toBeEnabled();
// })
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../App';

test('test', () => {
  expect(true).toBe(true);
});

test('Should see main header', () => {
  render(<App />);
  expect(screen.getByText('Books you might like to read...')).toBeInTheDocument();
});
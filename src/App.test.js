import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  render(<App />);
  const heading = screen.getByText(/Welcome to My Secure React App/i);
  expect(heading).toBeInTheDocument();
});

test('renders button and handles click', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: /click me/i });
  expect(button).toBeInTheDocument();
  fireEvent.click(button);
});

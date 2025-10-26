import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';

test('calls onSubmit with username', () => {
  const handleSubmit = jest.fn();
  render(<LoginForm onSubmit={handleSubmit} />);

  fireEvent.change(screen.getByPlaceholderText(/enter username/i), {
    target: { value: 'Seif' },
  });
  fireEvent.click(screen.getByRole('button', { name: /login/i }));

  expect(handleSubmit).toHaveBeenCalledWith('Seif');
});

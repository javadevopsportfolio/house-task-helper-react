import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';

test('renders login', () => {
  render(<Login />);
  const loginElement = screen.getByTitle("loginPage");
  expect(loginElement).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import App from './App';
import { Nav, Navbar } from "react-bootstrap";

test('renders Nav bar', () => {
  render(<App />);
  const navElement = screen.getByTitle("mainNav");
  expect(navElement).toBeInTheDocument();
  expect(navElement.childNodes.length).toBe(2);
});

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('looks for saipe', () => {
  render(<App />)
  const linkElement = screen.getByText(/saipe/i)
  expect(linkElement).toBeInTheDocument();
})

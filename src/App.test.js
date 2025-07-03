import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // You can update this test to match your actual UI
  expect(screen.getByText(/walmart/i)).toBeInTheDocument();
});

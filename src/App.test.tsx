import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('incrementa contador', async () => {
  render(<App />);
  const btn = screen.getByRole('button');
  await userEvent.click(btn);
  expect(btn).toHaveTextContent(/count is 1/i);
});

import { render, screen } from '@testing-library/preact';
import Count from '../Count';

describe('Count component', () => {
  test('renders the given count', () => {
    const count = 42;
    render(<Count c={count} />);
    const countElement = screen.getByText(count.toString());
    expect(countElement).toBeInTheDocument();
  });
});

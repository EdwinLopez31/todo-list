import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Label from '@/components/ui/label';
import Input from '@/components/ui/input';

describe('Label', () => {
  beforeEach(() => {
    render(<Label label="test" htmlFor="test" />);
  });

  it('renders', () => {
    const label = screen.getByText(/test/i);
    expect(label).toBeInTheDocument();
  });

  it('focuses the corresponding input element when clicked', async () => {
    render(<Input name="testName" id="test" />);
    const label = screen.getByText(/test/i);
    const input = screen.getByLabelText(/test/i);

    await userEvent.click(label);

    expect(input).toHaveFocus();
  });
});

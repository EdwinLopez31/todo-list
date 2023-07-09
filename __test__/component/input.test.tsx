import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from 'components/ui/input';

describe('Input Text Type & General Test', () => {
  beforeEach(() => {
    render(
      <Input name="input-name" id="input-id" placeholder="test-plchlder" />
    );
  });
  it('renders', () => {
    // aria-label uses the id for value
    const input = screen.getByRole('textbox', {
      name: /input-id/i,
    });

    expect(input).toBeInTheDocument();
  });

  it('has placeholder', async () => {
    const input = screen.getByPlaceholderText(/test-plchlder/i);
    expect(input).toBeInTheDocument();
  });

  it('reflects user input', async () => {
    const input = screen.getByRole('textbox', {
      name: /input-id/i,
    });
    await userEvent.type(input, 'test');
    expect(input).toHaveValue('test');
  });
});

describe('Input Number Type', () => {
  beforeEach(() => {
    render(<Input name="input-name" id="input-id" type="number" />);
  });
  it('accepts only numbers', async () => {
    const input = screen.getByRole('spinbutton', {
      name: /input-id/i,
    });
    await userEvent.type(input, '123a');
    expect(input).toHaveValue(123);
  });
});

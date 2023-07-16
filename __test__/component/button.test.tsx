import { screen, render } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import Button from 'components/ui/button';
describe('Button Component', () => {
  const mockedFn = vi.fn();

  beforeEach(() => {
    render(<Button text="Click me" onClick={mockedFn} />);
  });

  it('renders', () => {
    const button = screen.getByRole('button', {
      name: /click me/i,
    });

    expect(button).toBeInTheDocument();
  });

  it('performs the onclick function', async () => {
    const button = screen.getByRole('button', {
      name: /click me/i,
    });

    await UserEvent.click(button);

    expect(mockedFn).toHaveBeenCalled();
  });
});

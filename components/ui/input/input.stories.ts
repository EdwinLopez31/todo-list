import type { Meta, StoryObj } from '@storybook/react';

import Input from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Input> = {
  title: 'Example/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['text', 'number', 'password', 'email'],
      control: { type: 'radio' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Main: Story = {
  args: {
    type: 'text',
    placeholder: 'Sample value',
  },
};

export const Number: Story = {
  args: {
    type: 'number',
    placeholder: '123',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Password',
  },
};

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'john.doe@example.com',
  },
};

import type { Meta, StoryObj } from '@storybook/react';

import Input from '.';

const meta: Meta<typeof Input> = {
  title: 'Example/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['text', 'number', 'password', 'email'],
      control: { type: 'radio' },
    },
    state: {
      options: ['default', 'error'],
      control: { type: 'radio' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Text: Story = {
  args: {
    type: 'text',
    placeholder: 'Sample value',
    helperText: 'Some interesting text',
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

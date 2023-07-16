import type { Meta, StoryObj } from '@storybook/react';

import Button from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    state: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'radio' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    text: 'Sample Button',
  },
};

export const Secondary: Story = {
  args: {
    text: 'Sample Button',
    state: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    text: 'Sample Button',
    state: 'tertiary',
  },
};

import { Meta, StoryObj } from '@storybook/react';
import Label from '.';
import Input from '../input';

const meta: Meta<typeof Label> = {
  title: 'Example/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    uppercase: {
      options: [true, false],
      control: { type: 'boolean' },
    },
  },
};

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    uppercase: false,
    label: 'Sample Label',
    className: '',
  },
};

export const WithInput: Story = {
  args: {
    uppercase: false,
    label: 'Sample Label',
    htmlFor: 'control',
  },
  render: ({ uppercase, label, htmlFor }) => (
    <>
      <Label uppercase={uppercase} htmlFor={htmlFor} label={label} />
      <Input id={htmlFor} name="testName" />
    </>
  ),
};

export default meta;

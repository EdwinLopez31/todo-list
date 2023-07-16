import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const buttonStyles = cva(
  [
    'p-2',
    'rounded-md',
    'border',
    'outline-none',
    'transition-all',
    'ease-in-out',
    'duration-150',
    'ring-violet-300',
    'focus:ring-2',
    'hover:brightness-110',
    'focus:brightness-110',
    'active:scale-95',
  ],
  {
    variants: {
      state: {
        primary: 'bg-violet-500 text-slate-50  border-transparent',
        secondary: 'bg-transparent border border-violet-500 text-violet-500',
        tertiary: 'bg-transparent text-violet-500  border-transparent',
      },
    },
    defaultVariants: {
      state: 'primary',
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  text: string;
}

const Button = ({ text, state, className, ...props }: ButtonProps) => {
  return (
    <button className={`${buttonStyles({ state })} ${className}`} {...props}>
      {text}
    </button>
  );
};

export default Button;

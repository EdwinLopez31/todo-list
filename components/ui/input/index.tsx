import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const inputStyles = cva(
  ['p-2', 'w-auto', 'rounded-md', 'border', 'placeholder-neutral-400/50'],
  {
    variants: {
      state: {
        default: 'border-neutral-300 focus:outline-violet-500 caret-violet-500',
        error: 'border-red-500 focus:outline-red-500',
      },
    },
    defaultVariants: {
      state: 'default',
    },
  }
);

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputStyles> {
  /**
   * The input type
   */
  type?: 'text' | 'number' | 'password' | 'email';
  /**
   * The id attribute of the element
   */
  id: string;
  /**
   * The name attribute of the element
   */
  name: string;
  /**
   * The placeholder displayed on screen
   */
  placeholder?: string;
  /**
   * Helper text displayed below the input
   */
  helperText?: string;
}

/**
 * Primary UI component for user interaction
 */
const Input = ({ className, state, helperText, ...props }: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <input
        className={`${inputStyles({ state })} ${className ?? ''}`}
        aria-label={props.id}
        {...props}
      />
      {helperText && (
        <p
          className={`text-xs ${
            state === 'error' ? 'text-red-500' : 'text-neutral-400'
          }`}
        >
          {helperText}
        </p>
      )}
    </div>
  );
};

export default Input;

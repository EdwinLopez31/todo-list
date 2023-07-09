import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
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
}

/**
 * Primary UI component for user interaction
 */
const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      className="p-2 w-auto rounded-md border border-neutral-300 placeholder-neutral-400/50 focus:outline-violet-500"
      aria-label={props.id}
      {...props}
    />
  );
};

export default Input;

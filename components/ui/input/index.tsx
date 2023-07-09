import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'number' | 'password' | 'email';
  id: string;
  name: string;
}

const Input = ({ className, ...props }: InputProps) => {
  return <input aria-label={props.id} {...props} />;
};

export default Input;

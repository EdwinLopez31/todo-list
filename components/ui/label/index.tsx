import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const labelStyles = cva(['text-sm', 'select-none'], {
  variants: {
    uppercase: {
      true: 'uppercase',
      false: 'normal-case',
    },
  },
});

interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof labelStyles> {
  /**
   * The label text displayed on screen
   */
  label: string;
  /**
   * The id of the component the label is for
   */
  htmlFor: string;
  /**
   * The class name for styling purposes
   */
  className?: string;
}

const Label = ({
  label,
  htmlFor,
  className,
  uppercase,
  ...props
}: LabelProps) => {
  return (
    <label
      className={`${labelStyles({ uppercase })} ${className ?? ''}`}
      {...props}
      htmlFor={htmlFor}
    >
      {label}
    </label>
  );
};

export default Label;

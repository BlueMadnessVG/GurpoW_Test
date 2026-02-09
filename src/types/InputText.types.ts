import type { InputHTMLAttributes } from 'react';

export interface InputTextProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  // Required
  value: string;
  onChange: (value: string) => void;
  
  // Optional
  label?: string;
  error?: string;
  required?: boolean;
  
  // Styling
  containerClassName?: string;
  inputClassName?: string;
  labelClassName?: string;
  errorClassName?: string;

  // variation
  as?: string;
  rows?: number;
}

export interface ControlledInputTextProps extends Omit<InputTextProps, 'value' | 'onChange'> {
  name: string;
  control: any;
}
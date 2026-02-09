import type { ReactNode } from "react";

export interface DropdownOption {
  value: string | number;
  label: string;
  disable?: boolean;
  data?: Record<string, any>;
}

export interface DropdownProps {
  // Required props
  options: DropdownOption[];
  value: string | number | null;
  onChange: (value: string | number) => void;

  // Optional props
  placeholder?: string;
  label?: string;
  error?: string;
  disable?: boolean;
  required?: boolean;
  name?: string;
  id?: string;

  // Styles
  className?: string;
  dropdownClassName?: string;
  optionClassName?: string;
}

export interface ControlledDropdownProps extends Omit<
  DropdownProps,
  "value" | "onChange"
> {
  name: string;
  control: any; // React Hook Form control object
}

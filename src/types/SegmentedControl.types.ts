export interface SegmentedControlOption {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

export interface SegmentedControlProps {
  // required
  value: string;
  onChange: (value: string) => void;
  options: SegmentedControlOption[];

  // optional
  label?: string;
  error?: string;
  required?: boolean;
  disable?: boolean;
  name?: string;
  id?: string;

  // styling
  containerClassName?: string;
  buttonClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
  iconClassName?: string;
}

export interface ControlledSegmentedControlProps extends Omit<
  SegmentedControlProps,
  "value" | "onChange"
> {
  name: string;
  control: any;
}

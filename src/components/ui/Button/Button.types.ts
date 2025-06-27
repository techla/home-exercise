
type Variant = 'primary' | 'ghost';

type ButtonProps = {
  variant?: Variant;
  onClick?: () => void;
  label: string;
  disabled?: boolean;
  className?: string;
};

export type { ButtonProps };

import { ButtonHTMLAttributes } from 'react';

type Variant = 'primary' | 'ghost';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

export type { ButtonProps };
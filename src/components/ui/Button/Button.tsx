
import classNames from 'classnames';

import type { ButtonProps } from './Button.types';

import styles from './Button.module.scss';

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  label = '',
  onClick = () => {},
  disabled = false,
  className = ''
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={classNames(styles.button, styles[variant], className)}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
export { Button };

import classNames from 'classnames';

import type { ButtonProps } from './Button.types';

import styles from './Button.module.scss';

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  className = '',
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      type="button"
      className={classNames(styles.button, styles[variant], className)}
    />
  );
};
export { Button };
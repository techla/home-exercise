import classnames from 'classnames';

import IconChevron from '../../icons/IconChevron';
import type { ToggleButtonProps } from './ToggleButton.types';

import styles from './ToggleButton.module.scss';

const ToggleButton: React.FC<ToggleButtonProps> = ({ expanded, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      aria-expanded={expanded}
      aria-label={expanded ? 'Collapse section' : 'Expand section'}
      className={styles.toggleButton}
    >
      <span className={styles.label}>{expanded ? 'Collapse' : 'Expand'}</span>
      <i aria-hidden="true" className={classnames({ [styles.rotate]: expanded })}><IconChevron /></i>
    </button>
  );
}

export { ToggleButton };
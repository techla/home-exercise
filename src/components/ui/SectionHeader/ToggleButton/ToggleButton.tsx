import classnames from 'classnames';
import { KeyboardEvent } from 'react';

import IconChevron from '../../icons/IconChevron';
import type { ToggleButtonProps } from './ToggleButton.types';

import styles from './ToggleButton.module.scss';
import { Button } from '../../Button/Button';

const ToggleButton: React.FC<ToggleButtonProps> = ({ expanded, onToggle, 'aria-controls': ariaControls }) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onToggle();
    }
  };

  return (
    <Button
      variant="ghost"
      onClick={onToggle}
      onKeyDown={handleKeyDown}
      className={styles.toggleButton}
      aria-label={expanded ? 'Collapse' : 'Expand'}
      aria-controls={ariaControls}
      aria-expanded={expanded}
      data-cy={expanded ? 'collapse-button' : 'expand-button'}
    >
      <span>{expanded ? 'Collapse' : 'Expand'}</span>
      <i aria-hidden="true" className={classnames({ [styles.rotate]: expanded })}><IconChevron /></i>
    </Button>
  );
}

export { ToggleButton };
import { useState } from 'react';
import classnames from 'classnames';

import { ToggleButton } from './ToggleButton/ToggleButton';
import type { SectionHeaderProps } from './SectionHeader.types';

import styles from './SectionHeader.module.scss';

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, toggleable, children }) => {
  const [isExpended, setIsExpended] = useState(true);
  
  return (
    <>
      <header className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        {toggleable && (
          <ToggleButton 
            expanded={isExpended} 
            onToggle={() => setIsExpended(!isExpended)}
          />
        )}
      </header>
      <div 
        className={classnames({[styles.collapsed]: !isExpended})}
        aria-expanded={toggleable ? isExpended : undefined}
      >
        { children }
      </div>
    </>
  );
};
export { SectionHeader };
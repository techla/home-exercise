import { useState } from 'react';
import classnames from 'classnames';

import { ToggleButton } from './ToggleButton/ToggleButton';
import type { SectionHeaderProps } from './SectionHeader.types';

import styles from './SectionHeader.module.scss';

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, toggleable, children }) => {
  const [isExpended, setIsExpended] = useState(true);
  const headerId = `section-header-${title.toLowerCase().replace(/\s+/g, '-')}`;
  const contentId = `section-content-${title.toLowerCase().replace(/\s+/g, '-')}`;
  
  return (
    <>
      <header className={styles.header}>
        <h1
          className={styles.title} 
          tabIndex={0}
          role="heading"
        >
          {title}
        </h1>
        {toggleable && (
          <ToggleButton 
            expanded={isExpended} 
            onToggle={() => setIsExpended(!isExpended)}
            aria-controls={contentId}
          />
        )}
      </header>
      <div 
        id={contentId}
        className={classnames({[styles.collapsed]: !isExpended})}
        aria-expanded={toggleable ? isExpended : undefined}
        aria-labelledby={`${headerId}-title`}
        role={toggleable ? 'region' : undefined}
        aria-hidden={toggleable ? !isExpended : undefined}
      >
        {children}
      </div>
    </>
  );
};
export { SectionHeader };
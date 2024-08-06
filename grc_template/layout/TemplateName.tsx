import React, { FC } from 'react';
import styles from './TemplateName.module.css';

interface TemplateNameProps {
  children?: React.ReactNode;
}

const TemplateName: FC<TemplateNameProps> = ({children}) => {
 return (
    <div className={styles.TemplateName} data-testid="TemplateName">
      TemplateName Component <br /> {children}
    </div>
 );
};

export default TemplateName;

import React, { FC } from 'react';
import styles from './TemplateName.module.css';

interface TemplateNameProps {}

const TemplateName: FC<TemplateNameProps> = (props:object) => {
  return (
  <div className={styles.TemplateName} data-testid="TemplateName">
    TemplateName Component <br/>
  </div>
  );
}

export default TemplateName;

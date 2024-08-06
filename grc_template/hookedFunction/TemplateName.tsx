import React, { FC, useEffect, useState } from 'react';
import styles from './TemplateName.module.css';

interface TemplateNameProps {}

const templateNameInitialState = false;

const TemplateName: FC<TemplateNameProps> = (props) => {
  const [state, setState] = useState(templateNameInitialState);
  useEffect(() => {
    //mount effect & update de state
  }, [state]);
  useEffect(() => {
    //mount
  });
  return (
  <div className={styles.TemplateName} data-testid="TemplateName">
    TemplateName Component <br/> {JSON.stringify(state)}
  </div>
  );
}

export default TemplateName;

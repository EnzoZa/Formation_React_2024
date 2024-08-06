import React, { FC, useEffect, useState } from 'react';
import styles from './MemeForm.module.css';

interface MemeFormProps {}

const memeFormInitialState = false;

const MemeForm: FC<MemeFormProps> = () => {
  const [state, setState] = useState(memeFormInitialState);
  useEffect(() => {
    //mount effect & update de state
  }, [state]);
  useEffect(() => {
    //mount
  });
  return (
  <div className={styles.MemeForm} data-testid="MemeForm">
    MemeForm Component <br/> {JSON.stringify(state)}
  </div>
  );
}

export default MemeForm;

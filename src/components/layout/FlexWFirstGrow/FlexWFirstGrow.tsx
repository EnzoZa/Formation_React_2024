import React, { FC } from 'react';
import styles from './FlexWFirstGrow.module.css';

interface FlexWFirstGrowProps {
  children?: React.ReactNode;
}

const FlexWFirstGrow: FC<FlexWFirstGrowProps> = ({children}) => {
 return (
    <div className={styles.FlexWFirstGrow} data-testid="FlexWFirstGrow">
      FlexWFirstGrow Component <br /> {children}
    </div>
 );
};

export default FlexWFirstGrow;

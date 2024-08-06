import React, { FC } from 'react';
import styles from './FlexHThirdGrow.module.css';

interface FlexHThirdGrowProps {
  children?: React.ReactNode;
}

const FlexHThirdGrow: FC<FlexHThirdGrowProps> = ({children}) => {
 return (
    <div className={styles.FlexHThirdGrow} data-testid="FlexHThirdGrow">
      {children}
    </div>
 );
};

export default FlexHThirdGrow;

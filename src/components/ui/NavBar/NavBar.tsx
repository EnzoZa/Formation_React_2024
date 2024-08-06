import React, { FC } from 'react';
import styles from './NavBar.module.css';

interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => {
  return (
  <div className={styles.NavBar} data-testid="NavBar">
    NavBar Component <br/>
  </div>
  );
}

export default NavBar;

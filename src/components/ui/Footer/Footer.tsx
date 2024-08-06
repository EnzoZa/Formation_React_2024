import React, { FC } from 'react';
import styles from './Footer.module.css';

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
  <div className={styles.Footer} data-testid="Footer">
    Footer Component <br/>
  </div>
  );
}

export default Footer;

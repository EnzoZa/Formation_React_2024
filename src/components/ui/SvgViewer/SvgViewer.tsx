import React, { FC } from 'react';
import styles from './SvgViewer.module.css';

interface SvgViewerProps {}

const SvgViewer: FC<SvgViewerProps> = () => {
  return (
  <div className={styles.SvgViewer} data-testid="SvgViewer">
    SvgViewer Component <br/>
  </div>
  );
}

export default SvgViewer;

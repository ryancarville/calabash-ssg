import * as styles from '../../../cssModules/dialog.module.css';
import React from 'react';

const Dialog = ({ children }) => {
  return (
    <div className={styles.dialogWrapper}>
      {children}
    </div>
  );
};

export default Dialog;

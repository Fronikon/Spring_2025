import React, { memo } from 'react';
import styles from './Error.module.css';

interface PropsType {
  errorMessage: string;
}

const Error: React.FC<PropsType> = memo(({ errorMessage }) => {
  return <div className={styles.error}>{errorMessage}</div>;
});

export default Error;

import React from 'react';
import styles from './Error.module.css';

interface PropsType {
  error: string;
}

const Error: React.FC<PropsType> = ({ error }) => {
  return (
    <section className={styles['error-container']}>
      <div className={`container ${styles['error-wrapper']}`}>
        <h3 className={styles.error}>{error}</h3>
      </div>
    </section>
  );
};

export default Error;

import React from 'react';
import preloader from '../../assets/gif/preloader.gif';
import styles from './Preloader.module.css';

const Preloader: React.FC = () => {
  return (
    <div className={styles.container}>
      <img className={styles.loading} src={preloader} alt="Load data" />
    </div>
  );
};

export default Preloader;

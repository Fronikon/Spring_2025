import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './HeaderFullPhoto.module.css';

interface PropsType {
  photoId: string;
}

const HeaderFullPhoto: React.FC<PropsType> = ({ photoId }) => {
  const navigate = useNavigate();

  const backToPrevPage = () => {
    navigate(-1);
  };

  return (
    <section className={styles['header-container']}>
      <div className={`container ${styles['header-wrapper']}`}>
        <button className={styles['back-button']} onClick={backToPrevPage}>
          ← Back
        </button>
        <h2 className={styles.position}>
          <span className={styles.position__title}>Id:</span>
          <span className={styles.position__number}>#{photoId}</span>
        </h2>
      </div>
    </section>
  );
};

export default HeaderFullPhoto;

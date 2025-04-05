import React from 'react';
import styles from './ImgFullPhoto.module.css';

interface PropsType {
  imgSrc: string;
  title: string;
}

const ImgFullPhoto: React.FC<PropsType> = ({ imgSrc, title }) => {
  return (
    <section className={styles['photo-container']}>
      <div className={`container ${styles['photo-wrapper']}`}>
        <div className={`container ${styles['photo-img-container']}`}>
          <img className={styles['photo-img']} src={imgSrc} alt={title} />
        </div>
      </div>
    </section>
  );
};

export default ImgFullPhoto;

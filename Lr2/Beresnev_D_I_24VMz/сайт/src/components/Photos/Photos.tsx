import React from 'react';
import { PhotoType } from 'types/photoTypes';
import styles from 'components/Photos/Photos.module.css';
import Photo from 'components/Photos/Photo/Photo';
import Preloader from 'components/Preloader/Preloader';

interface PropsType {
  photos: PhotoType[];
  isLoadingPhotos: boolean;
}
const Photos: React.FC<PropsType> = ({ photos, isLoadingPhotos }) => {
  return (
    <section className={styles['photos-container']}>
      <div className={`container ${styles['photos-wrapper']}`}>
        <div className={styles.photos}>
          {isLoadingPhotos && <Preloader />}
          {!photos.length && <h3 className={styles['empty-photos']}>Photos not found 😔</h3>}
          {photos.map((photo) => (
            <Photo key={photo.id} photoId={photo.id} url={photo.imgSrc} name={photo.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Photos;

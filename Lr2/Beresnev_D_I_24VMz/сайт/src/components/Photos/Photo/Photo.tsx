import React from 'react';
import styles from './Photo.module.css';
import { Link } from 'react-router-dom';

interface PropsType {
  url: string;
  name: string;
  photoId: string;
}

const Photo: React.FC<PropsType> = ({ url, name, photoId }) => {
  return (
    <Link to={`photo/${photoId}`}>
      <div role={'photoCard'} className={styles.photo}>
        <img className={styles.img} src={url} alt={name} />
        <div className={styles.content}>
          <p>{name}</p>
        </div>
      </div>
    </Link>
  );
};

export default Photo;

import React from 'react';
import styles from './ContentFullPhoto.module.css';

interface PropsType {
  title: string;
  username: string;
  realname: string;
  views: string;
  taken: string;
}

const ContentFullPhoto: React.FC<PropsType> = (props) => {
  return (
    <section className={styles['photo-content-container']}>
      <div className={`container ${styles['photo-content-wrapper']}`}>
        <div className={styles['main-info']}>
          <h3 className={styles.title}>{props.title}</h3>
          <p className={styles.owner}>
            <b>Author: </b>
            <span>
              {props.username}
              {props.realname && ` ( ${props.realname} )`}
            </span>
          </p>
        </div>
        <div className={styles['side-info']}>
          <div>
            <b>Views</b>
            <p className={styles.views}>{props.views}</p>
          </div>
          <div>
            <b>Taken</b>
            <p className={styles.data}>{props.taken}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentFullPhoto;

import React from 'react';
import styles from './FormCard.module.css';

interface PropsType {
  avatar: string;
  name: string;
  gender: string;
  dateOfBrith: string;
  country: string;
}

const FormCard: React.FC<PropsType> = (props) => {
  return (
    <div className={styles.card}>
      <img role="imgAvatar" className={styles.img} src={props.avatar} alt="avatar" />
      <div className={styles.info}>
        <h2 role="nameField" className={styles.title}>
          {props.name}
        </h2>
        <p role="genderField" className={styles.field}>
          <b>Gender</b>: {props.gender}
        </p>
        <p role="dateOfBrithField" className={styles.field}>
          <b>Date of brith</b>: {props.dateOfBrith}
        </p>
        <p role="countryField" className={styles.field}>
          <b>Country</b>: {props.country}
        </p>
        <p role="permissionField" className={styles.field}>
          <b>Permission</b>: ✅
        </p>
      </div>
    </div>
  );
};

export default FormCard;

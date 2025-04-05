import React from 'react';
import { FormCardType } from 'types/formTypes';
import styles from './FormCards.module.css';
import FormCard from './FormCard/FormCard';

interface PropsType {
  formCards: FormCardType[];
}

const FormCards: React.FC<PropsType> = ({ formCards }) => {
  return (
    <div className={styles.cards}>
      <div className={styles.header}>
        <h3>LIST</h3>
      </div>
      <div className={styles.content}>
        {!formCards.length && <h3 className={styles['list-empty']}>List is empty</h3>}
        {formCards.map((card, index) => {
          return <FormCard key={index} {...card} />;
        })}
      </div>
    </div>
  );
};

export default FormCards;

import React from 'react';
import styles from './FormPage.module.css';
import { FormCardType } from './../../types/formTypes';
import Form from '../../components/Form/Form';
import FormCards from 'components/FormCards/FormCards';
import { useAppDispatch, useAppSelector } from './../../hooks/reduxHooks';
import { addFormCardAC } from 'state/reducers/formReducer';

const Forms: React.FC = () => {
  const formCards = useAppSelector((state) => state.form.formCards);
  const dispatch = useAppDispatch();

  const setFormCard = (formCard: FormCardType): void => {
    dispatch(addFormCardAC(formCard));
  };

  return (
    <main role={'Forms'} className={styles.container}>
      <div className={`container`}>
        <div className={styles.content}>
          <Form setFormCard={setFormCard} />
          <FormCards formCards={formCards} />
        </div>
      </div>
    </main>
  );
};

export default Forms;

import React, { FormEvent, useRef, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import styles from './Form.module.css';
import { FormCardType } from 'types/formTypes';
import defaultAvatar from '../../assets/photos/default-avatar.webp';
import Error from './components/Error/Error';
import { COUNTRY_NAMES } from 'data/countriesData';

interface PropsType {
  setFormCard: (formCard: FormCardType) => void;
}

type Inputs = {
  avatar: string;
  name: string;
  gender: string;
  date: string;
  country: string;
  permission: string;
};

const Form: React.FC<PropsType> = ({ setFormCard }) => {
  const [isShowSuccessMessage, setIsShowSuccessMessage] = useState(false);
  const [isFirstType, setIsFirstType] = useState(false);
  const imgAvatar = useRef<HTMLImageElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
    trigger,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setFormCard({
      avatar: imgAvatar.current?.src || '',
      name: data.name,
      gender: data.gender,
      dateOfBrith: data.date,
      country: data.country,
    });

    reset();
    if (imgAvatar.current) {
      imgAvatar.current.src = defaultAvatar;
    }
    setIsFirstType(false);

    setIsShowSuccessMessage(true);
    setTimeout(() => setIsShowSuccessMessage(false), 2000);
  };

  const onChangeAvatar = (e: FormEvent<HTMLInputElement>): void => {
    const target = e.currentTarget;
    const files = target.files;
    if (files && files[0] && files[0].type.includes('image')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target && imgAvatar.current && typeof event.target.result === 'string') {
          setValue('avatar', target.value);
          trigger('avatar');
          imgAvatar.current.src = event.target.result;
        }
      };
      reader.readAsDataURL(files[0]);
    } else {
      if (imgAvatar.current) {
        setValue('avatar', '');
        trigger('avatar');
        imgAvatar.current.src = defaultAvatar;
      }
    }
  };

  const onChangeForm = () => {
    setIsFirstType(true);
  };

  return (
    <form onChange={onChangeForm} onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles['form__header']}>
        <h2 className={styles['form-title']}>FORM</h2>
      </div>
      {isShowSuccessMessage && (
        <div className={styles['data-sent']}>
          <h3>Submitted</h3>
        </div>
      )}
      <div role="formContent" className={styles['form__content']}>
        <div className={styles.avatar}>
          <label>
            <img ref={imgAvatar} role="imgAvatar" src={defaultAvatar} alt="avatar" />
            <input
              role="choseAvatar"
              onChange={onChangeAvatar}
              className={styles['file-field']}
              accept="image/*"
              type="file"
            />
            <input
              {...register('avatar', {
                required: '"Avatar" is required',
              })}
              type="hidden"
            />
          </label>
          {errors.avatar?.message && <Error errorMessage={errors.avatar.message} />}
        </div>

        <div>
          <label>
            <h4 className={styles['field-title']}>Name:</h4>
            <input
              {...register('name', { required: '"Name" is required' })}
              role="nameSelect"
              className={styles['name-field']}
              placeholder="Enter your name"
              type="text"
            />
          </label>
          {errors.name?.message && <Error errorMessage={errors.name.message} />}
        </div>

        <div className={styles['gender-and-date']}>
          <div>
            <label>
              <h4 className={styles['field-title']}>Gender:</h4>
              <div className={styles['gender-content']}>
                <label>
                  Male
                  <input
                    {...register('gender', { required: '"Gender" is required' })}
                    role="maleSelect"
                    type="radio"
                    name="gender"
                    value="male"
                  />
                </label>
                <label>
                  Female
                  <input
                    {...register('gender', { required: '"Gender" is required' })}
                    role="femaleSelect"
                    type="radio"
                    name="gender"
                    value="female"
                  />
                </label>
              </div>
            </label>
            {errors.gender?.message && <Error errorMessage={errors.gender.message} />}
          </div>

          <div>
            <label>
              <h4 className={styles['field-title']}>Date of birth:</h4>
              <input
                {...register('date', { required: '"Date of birth" is required' })}
                role="selectDateOfBrith"
                className={styles['date-field']}
                type="date"
              />
            </label>
            {errors.date?.message && <Error errorMessage={errors.date.message} />}
          </div>
        </div>

        <div>
          <label>
            <h4 className={styles['field-title']}>Country:</h4>
            <select
              {...register('country', { required: '"Country" is required' })}
              role="selectCoutry"
              className={styles['country-field']}
              defaultValue=""
              name="country"
            >
              <option disabled value="">
                Select a country
              </option>
              {COUNTRY_NAMES.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </label>
          {errors.country?.message && <Error errorMessage={errors.country.message} />}
        </div>

        <div>
          <label>
            I give permission for the processing of my personal data:
            <input
              {...register('permission', { required: '"Permission" is required' })}
              role="permissionSelect"
              className={styles['permission-field']}
              type="checkbox"
            />
          </label>
          {errors.permission?.message && <Error errorMessage={errors.permission.message} />}
        </div>

        <input
          className={styles.submit}
          type="submit"
          value="Submit"
          disabled={!isFirstType || !!Object.keys(errors).length}
        />
      </div>
    </form>
  );
};

export default Form;

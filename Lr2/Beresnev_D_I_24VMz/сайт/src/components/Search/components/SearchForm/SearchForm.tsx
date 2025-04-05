import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import styles from './SearchForm.module.css';
import { FiltersType } from '../../../../types/searchTypes';

interface PropsType {
  setFilterByName: (value: string) => void;
  filters: FiltersType;
}

const SearchForm: React.FC<PropsType> = ({ setFilterByName, filters }) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const onSubmit = (e: FormEvent): void => {
    e.preventDefault();

    setFilterByName(searchValue);
  };
  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    setSearchValue(filters.filterByName);
  }, [filters.filterByName]);

  return (
    <form onSubmit={onSubmit} className={styles['search-form']}>
      <input role="searchInputSubmit" type="submit" className={styles.submit} value="" />
      <input
        onChange={onChange}
        value={searchValue}
        placeholder="Photo name"
        className={styles.text}
        type="text"
      />
    </form>
  );
};

export default SearchForm;

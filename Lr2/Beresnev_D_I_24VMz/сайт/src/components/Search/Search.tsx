import React from 'react';
import styles from './Search.module.css';
import { FiltersType } from './../../types/searchTypes';
import SearchForm from './components/SearchForm/SearchForm';
import SelectSort from './components/SelectSort/SelectSort';

interface PropsType {
  setFilterByName: (value: string) => void;
  setFilterBySort: (value: string) => void;
  filters: FiltersType;
}
const Search: React.FC<PropsType> = (props) => {
  return (
    <section className={styles['search-container']}>
      <div className={`container ${styles['search-wrapper']}`}>
        <SearchForm setFilterByName={props.setFilterByName} filters={props.filters} />
        <SelectSort setFilterBySort={props.setFilterBySort} filters={props.filters} />
      </div>
    </section>
  );
};

export default Search;

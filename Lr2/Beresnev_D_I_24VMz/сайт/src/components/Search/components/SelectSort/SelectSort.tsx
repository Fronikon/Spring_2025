import React, { ChangeEvent } from 'react';
import styles from './SelectSort.module.css';
import { SORT } from 'data/sortData';
import { FiltersType } from '../../../../types/searchTypes';

interface PropsType {
  setFilterBySort: (value: string) => void;
  filters: FiltersType;
}

const SelectSort: React.FC<PropsType> = ({ filters, setFilterBySort }) => {
  const onSubmit = (e: ChangeEvent<HTMLSelectElement>): void => {
    const value = e.target.value;
    setFilterBySort(value);
  };

  return (
    <select className={styles.items} onChange={onSubmit} value={filters.filterBySort}>
      <option value={SORT.INTERESTINGNESS_DESC}>Interestingness ↓</option>
      <option value={SORT.INTERESTINGNESS_ASC}>Interestingness ↑</option>
      <option value={SORT.DATE_POSTED_DESC}>Date ↓</option>
      <option value={SORT.DATE_POSTED_ASC}>Date ↑</option>
    </select>
  );
};

export default SelectSort;

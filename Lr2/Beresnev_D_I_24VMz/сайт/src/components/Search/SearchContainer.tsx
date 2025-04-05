import React from 'react';
import Search from 'components/Search/Search';
import { useAppDispatch, useAppSelector } from './../../hooks/reduxHooks';
import { setFilterByNameAC, setFilterBySortAC } from 'state/reducers/photosReducer';

const SearchContainer: React.FC = () => {
  const filters = useAppSelector((state) => state.photos.filters);
  const dispatch = useAppDispatch();

  const setFilterByName = (filterByName: string): void => {
    dispatch(setFilterByNameAC(filterByName));
  };
  const setFilterBySort = (filterBySort: string): void => {
    dispatch(setFilterBySortAC(filterBySort));
  };

  return (
    <Search setFilterByName={setFilterByName} setFilterBySort={setFilterBySort} filters={filters} />
  );
};

export default SearchContainer;

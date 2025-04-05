import React from 'react';
import { setCurrentPageAC, setPerPageAC } from 'state/reducers/photosReducer';
import Pagination from './Pagination';
import { useAppDispatch, useAppSelector } from './../../hooks/reduxHooks';

const PaginationContainer: React.FC = () => {
  const countPages = useAppSelector((state) => state.photos.countPages);
  const perPage = useAppSelector((state) => state.photos.perPage);
  const currentPage = useAppSelector((state) => state.photos.currentPage);
  const dispatch = useAppDispatch();

  const setPerPage = (number: number): void => {
    dispatch(setPerPageAC(number));
  };
  const setCurrentPage = (number: number): void => {
    dispatch(setCurrentPageAC(number));
  };

  return (
    <Pagination
      setCurrentPage={setCurrentPage}
      setPerPage={setPerPage}
      countPages={countPages}
      perPage={perPage}
      currentPage={currentPage}
    />
  );
};

export default PaginationContainer;

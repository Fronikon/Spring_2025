import React, { useCallback, useEffect } from 'react';
import { Navigate, Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from 'components/Header/Header';
import Home from 'pages/Home/Home';
import About from 'pages/About/About';
import PageNotFound from 'pages/PageNotFound/PageNotFound';
import Forms from 'pages/FormPage/FormPage';
import FullPhoto from 'pages/FullPhoto/FullPhoto';
import { useAppSelector } from 'hooks/reduxHooks';
import { useAppDispatch } from './hooks/reduxHooks';
import { getPhotoCards } from './state/reducers/photosReducer';

const App: React.FC = () => {
  const { filterByName, filterBySort } = useAppSelector((state) => state.photos.filters);
  const perPage = useAppSelector((state) => state.photos.perPage);
  const currentPage = useAppSelector((state) => state.photos.currentPage);

  const dispatch = useAppDispatch();

  const saveSearchValue = useCallback((): void => {
    localStorage.setItem('filterByName', filterByName);
    localStorage.setItem('filterBySort', filterBySort);
  }, [filterByName, filterBySort]);

  useEffect(() => {
    window.addEventListener('unload', saveSearchValue);
  }, [saveSearchValue]);

  useEffect(() => {
    dispatch(
      getPhotoCards({
        currentPage: currentPage,
        perPageValue: perPage,
        searchValue: filterByName,
        sortValue: filterBySort,
      })
    );
  }, [dispatch, currentPage, perPage, filterByName, filterBySort]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photo/:id" element={<FullPhoto />} />
        <Route path="/about" element={<About />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/404" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

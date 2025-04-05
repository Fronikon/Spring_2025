import React from 'react';
import styles from './Home.module.css';
import SearchContainer from 'components/Search/SearchContainer';
import PhotosContainer from 'components/Photos/PhotosContainer';
import PaginationContainer from 'components/Pagination/PaginationContainer';

const Home: React.FC = () => {
  return (
    <main role="HomePage" className={styles.home}>
      <SearchContainer />
      <PhotosContainer />
      <PaginationContainer />
    </main>
  );
};

export default Home;

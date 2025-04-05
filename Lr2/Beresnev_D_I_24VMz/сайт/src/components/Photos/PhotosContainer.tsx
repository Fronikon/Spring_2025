import React from 'react';
import { useAppSelector } from 'hooks/reduxHooks';
import Photos from './Photos';
import Error from 'components/Error/Error';

const PhotosContainer: React.FC = () => {
  const photoCards = useAppSelector((state) => state.photos.photoCards);
  const isLoadingPhotos = useAppSelector((state) => state.photos.isLoadingPhotos);
  const error = useAppSelector((state) => state.photos.error);

  return (
    <>
      {error ? (
        <Error error={error} />
      ) : (
        <Photos isLoadingPhotos={isLoadingPhotos} photos={photoCards} />
      )}
    </>
  );
};

export default PhotosContainer;

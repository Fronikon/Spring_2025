import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FullPhotoApiType, PhotoType } from 'types/photoTypes';
import { useAppSelector } from 'hooks/reduxHooks';
import { useAppDispatch } from './../../hooks/reduxHooks';
import { getPhotoInfoTAC } from 'state/reducers/photosReducer';
import HeaderFullPhoto from '../../components/HeaderFullPhoto/HeaderFullPhoto';
import ImgFullPhoto from '../../components/ImgFullPhoto/ImgFullPhoto';
import ContentFullPhoto from '../../components/ContentFullPhoto/ContentFullPhoto';
import Error from '../../components/Error/Error';

const FullPhoto: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const photoCards = useAppSelector((state) => state.photos.photoCards);
  const dispatch = useAppDispatch();

  const [error, setError] = useState<null | string>(null);
  const [photoData, setPhoto] = useState<null | PhotoType>(null);
  const [photoFullData, setFullPhoto] = useState<null | FullPhotoApiType>(null);

  useEffect(() => {
    const currentPhoto = photoCards.find((photo) => photo.id === id);
    if (currentPhoto) {
      setPhoto(currentPhoto);
      (async () => {
        try {
          const photo = await dispatch(getPhotoInfoTAC(currentPhoto.id)).unwrap();
          setFullPhoto(photo);
        } catch (errorMessage) {
          setError(errorMessage as string);
        }
      })();
    } else {
      navigate('/');
    }
  }, [dispatch, navigate, id, photoCards]);

  return (
    <div>
      <HeaderFullPhoto photoId={id || 'xxxxxxxx'} />
      {error ? (
        <Error error={error} />
      ) : (
        photoData &&
        photoFullData && (
          <>
            <ImgFullPhoto imgSrc={photoData.imgSrc} title={photoData.title} />
            <ContentFullPhoto
              title={photoData.title}
              username={photoFullData.owner.username}
              realname={photoFullData.owner.realname}
              views={photoFullData.views}
              taken={photoFullData.dates.taken}
            />
          </>
        )
      )}
    </div>
  );
};

export default FullPhoto;

import React from 'react';
import { render, screen } from '@testing-library/react';
import PHOTOS_DATA from 'mocks/data/photosData';
import Photos from './Photos';
import Photo from './Photo/Photo';
import { BrowserRouter } from 'react-router-dom';

describe('Photos component', () => {
  it('check count rendered photos', () => {
    render(
      <BrowserRouter>
        <Photos isLoadingPhotos={false} photos={PHOTOS_DATA} />
      </BrowserRouter>
    );
    const photos = screen.getAllByRole('photoCard');
    expect(photos.length).toEqual(PHOTOS_DATA.length);
  });

  it('check render photo', () => {
    const randomNumber = Math.round(Math.random() * (PHOTOS_DATA.length - 1));
    const randomPhotoCard = PHOTOS_DATA[randomNumber];

    render(
      <BrowserRouter>
        <Photo
          photoId={'asdkajshdkjhasdh'}
          url={randomPhotoCard.imgSrc}
          name={randomPhotoCard.title}
        />
      </BrowserRouter>
    );

    const regexName = new RegExp(randomPhotoCard.title, 'i');

    const descriptionElement = screen.getByText(regexName);
    expect(descriptionElement).toBeInTheDocument();

    const imgElement: HTMLImageElement = screen.getByAltText(regexName);
    expect(imgElement).toBeInTheDocument();
  });
});

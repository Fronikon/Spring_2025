import { ApiPhotosAnswer } from 'api/photos';
import { rest } from 'msw';
import { CAT_PHOTOS, DOG_PHOTOS, ONE_PHOTO } from './data/photo';
import { PhotoApiType } from 'types/photoTypes';
import { ApiPhotoAnswer } from './../api/photos';
import { BASE_URL } from 'data/apiData';

const apiGet = rest.get(BASE_URL, (req, res, ctx) => {
  const method = req.url.searchParams.get('method');

  switch (method) {
    case 'flickr.photos.search': {
      let photo: PhotoApiType[] = [];
      const textQ = req.url.searchParams.get('text');

      if (textQ === 'cat') {
        photo = [...CAT_PHOTOS];
      } else if (textQ === 'dog') {
        photo = [...DOG_PHOTOS];
      }

      const resData: ApiPhotosAnswer = {
        photos: {
          page: 1,
          pages: 1,
          perpage: 20,
          total: 20,
          photo,
        },
        stat: 'ok',
      };

      return res(ctx.status(200), ctx.json(resData));
    }

    case 'flickr.photos.getInfo': {
      const resData: ApiPhotoAnswer = {
        photo: ONE_PHOTO,
        stat: 'ok',
      };

      return res(ctx.status(200), ctx.json(resData));
    }

    default: {
      return res(ctx.status(404));
    }
  }
});

export const handlers = [apiGet];

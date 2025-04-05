import { BASE_URL, MEDIA, NO_JSON_CALLBACK } from 'data/apiData';
import { FullPhotoApiType, PhotosType } from 'types/photoTypes';
import { PhotosApiType } from './../types/photoTypes';
import { METHOD, API_KEY, FORMAT } from './../data/apiData';

export interface ApiErrorAnswer {
  code: number;
  message: string;
  stat: 'fail';
}

export interface ApiPhotosAnswer {
  photos: PhotosApiType;
  stat: 'ok';
}
export interface ApiPhotoAnswer {
  photo: FullPhotoApiType;
  stat: 'ok';
}

export const getLinkOnPhoto = (
  farmId: number,
  serverId: string,
  id: string,
  secret: string
): string => {
  return `https://farm${farmId}.staticflickr.com/${serverId}/${id}_${secret}.jpg`;
};

export const getPhotosApi = async (
  searchValue: string,
  sortValue: string,
  currentPage: number,
  perPageValue: number
): Promise<Response> => {
  const perPage = `per_page=${perPageValue}`;
  const page = `page=${currentPage}`;
  const text = `text=${searchValue}`;
  const sort = `sort=${sortValue}`;

  const URL = `${BASE_URL}?${METHOD.SEARCH_PHOTOS}&${API_KEY}&${MEDIA}&${FORMAT}&${NO_JSON_CALLBACK}&${sort}&${perPage}&${page}&${text}`;

  return await fetch(URL);
};

export const getPhotoApi = async (photoId: string): Promise<Response> => {
  const photoIdQuery = `photo_id=${photoId}`;

  const URL = `${BASE_URL}?${METHOD.GET_INFO}&${API_KEY}&${photoIdQuery}&${FORMAT}&${NO_JSON_CALLBACK}`;

  return await fetch(URL);
};

export const getPhotos = async (
  searchValue: string,
  sort: string,
  currentPage: number,
  perPage: number
): Promise<PhotosType> => {
  const res: Response = await getPhotosApi(searchValue, sort, currentPage, perPage);

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  const apiAnswer: ApiErrorAnswer | ApiPhotosAnswer = await res.json();

  if (apiAnswer.stat !== 'ok') {
    throw new Error(apiAnswer.message);
  }

  let pages = apiAnswer.photos.pages;
  let total = apiAnswer.photos.total;

  // bag in API (no more than 4000 photos can come)
  if (total > 4000) {
    pages = Math.ceil(4000 / apiAnswer.photos.perpage);
    total = 4000;
  }

  return {
    ...apiAnswer.photos,
    pages,
    total,
    photo: apiAnswer.photos.photo.map((item) => {
      return {
        id: item.id,
        owner: item.owner,
        imgSrc: getLinkOnPhoto(item.farm, item.server, item.id, item.secret),
        title: item.title,
        ispublic: item.ispublic,
        isfriend: item.isfriend,
        isfamily: item.isfamily,
      };
    }),
  };
};

export const getPhoto = async (photoID: string): Promise<FullPhotoApiType> => {
  const res: Response = await getPhotoApi(photoID);

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  const apiAnswer: ApiErrorAnswer | ApiPhotoAnswer = await res.json();

  if (apiAnswer.stat !== 'ok') {
    throw new Error(apiAnswer.message);
  }

  return apiAnswer.photo;
};

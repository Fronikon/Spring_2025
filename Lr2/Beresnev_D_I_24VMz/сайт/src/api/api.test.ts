import { CAT_PHOTOS, DOG_PHOTOS, ONE_PHOTO } from 'mocks/data/photo';
import { getPhotos } from './photos';
import { getPhoto } from 'api/photos';
import { SORT } from 'data/sortData';

describe('Photos API', () => {
  it('get photos', async () => {
    const answerCat = await getPhotos('cat', SORT.INTERESTINGNESS_DESC, 1, 20);

    if (!(answerCat instanceof Error)) {
      expect(answerCat?.photo[0].title).toEqual(CAT_PHOTOS[0].title);
      expect(answerCat?.photo[0].id).toEqual(CAT_PHOTOS[0].id);
      expect(answerCat?.photo[0].id).not.toEqual('randomID');
    }

    const answerDog = await getPhotos('dog', SORT.INTERESTINGNESS_DESC, 1, 20);

    if (!(answerDog instanceof Error)) {
      expect(answerDog?.photo[0].title).toEqual(DOG_PHOTOS[0].title);
      expect(answerDog?.photo[0].id).toEqual(DOG_PHOTOS[0].id);
      expect(answerDog?.photo[0].id).not.toEqual('randomID');
    }
  });

  it('get photo', async () => {
    const photoData = await getPhoto('52103599421');

    if (!(photoData instanceof Error)) {
      expect(photoData?.id).toEqual(ONE_PHOTO.id);
      expect(photoData?.id).not.toEqual('randomID');
    }
  });
});

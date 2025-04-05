import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { FiltersType } from '../../types/searchTypes';
import { FullPhotoApiType, PhotoType } from '../../types/photoTypes';
import { SORT } from '../../data/sortData';
import { getPhoto, getPhotos } from './../../api/photos';
import { PhotosType } from './../../types/photoTypes';

type InitialStateType = {
  photoCards: PhotoType[];
  currentPage: number;
  perPage: number;
  countPages: number;
  filters: FiltersType;
  isLoadingPhotos: boolean;
  error: string | null;
};

const initialState: InitialStateType = {
  photoCards: [],
  countPages: 1,
  currentPage: 1,
  perPage: 20,
  filters: {
    filterByName: localStorage.getItem('filterByName') || '',
    filterBySort: localStorage.getItem('filterBySort') || SORT.INTERESTINGNESS_DESC,
  },
  isLoadingPhotos: false,
  error: null,
};

interface ArgsGetPhotoCardsTACType {
  searchValue: string;
  sortValue: string;
  currentPage: number;
  perPageValue: number;
}

export const getPhotoCards = createAsyncThunk<
  PhotosType,
  ArgsGetPhotoCardsTACType,
  { rejectValue: string }
>(
  'photos/getPhotoCards',
  async ({ searchValue, sortValue, currentPage, perPageValue }, { rejectWithValue }) => {
    try {
      return await getPhotos(searchValue, sortValue, currentPage, perPageValue);
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const getPhotoInfoTAC = createAsyncThunk<FullPhotoApiType, string, { rejectValue: string }>(
  'photos/getPhotoInfo',
  async (photoId, { rejectWithValue }) => {
    try {
      return await getPhoto(photoId);
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    setFilterByName: (state, action) => {
      state.currentPage = 1;
      state.filters.filterByName = action.payload;
    },
    setFilterBySort: (state, action) => {
      state.currentPage = 1;
      state.filters.filterBySort = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setPerPage: (state, action) => {
      state.currentPage = 1;
      state.perPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPhotoCards.fulfilled, (state, action) => {
      state.photoCards = action.payload.photo;
      state.countPages = action.payload.pages || 1;
      state.isLoadingPhotos = false;
      state.error = null;
    });
    builder.addCase(getPhotoCards.pending, (state) => {
      state.isLoadingPhotos = true;
    });
    builder.addCase(getPhotoCards.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload;
      }

      state.isLoadingPhotos = false;
    });
  },
});

export const {
  setFilterByName: setFilterByNameAC,
  setFilterBySort: setFilterBySortAC,
  setCurrentPage: setCurrentPageAC,
  setPerPage: setPerPageAC,
} = photosSlice.actions;
export default photosSlice.reducer;

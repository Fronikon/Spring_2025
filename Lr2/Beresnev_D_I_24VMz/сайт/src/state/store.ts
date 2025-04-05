import { configureStore } from '@reduxjs/toolkit';
import photosReducer from './reducers/photosReducer';
import formReducer from './reducers/formReducer';

export const store = configureStore({
  reducer: {
    photos: photosReducer,
    form: formReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

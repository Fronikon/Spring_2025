import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { FormCardType } from './../../types/formTypes';

type InitialStateType = {
  formCards: FormCardType[];
};

const initialState: InitialStateType = {
  formCards: [],
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addFormCard: (state, action: PayloadAction<FormCardType>) => {
      state.formCards.push(action.payload);
    },
  },
});

export const { addFormCard: addFormCardAC } = formSlice.actions;
export default formSlice.reducer;

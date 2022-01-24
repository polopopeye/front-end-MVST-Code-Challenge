import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import constants from 'src/core/constants';

import type { RootState } from '../../app/store';

export type TeaItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  categoryId: number;
  createdAt: Date;
  modifiedAt: Date;
};

export type TeaState = {
  data: [TeaItem?];
  pending: boolean;
  error: boolean;
};

const initialState: TeaState = {
  data: [],
  pending: false,
  error: false,
};

export const listTeas = createAsyncThunk('teas/list', async () => {
  const response = await axios.get(constants.baseApiUrl + '/teas/');

  return response.data;
});

export const listTeasSlice = createSlice({
  name: 'listTeas',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(listTeas.pending, (state) => {
        state.pending = true;
      })
      .addCase(listTeas.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.data = payload;
      })
      .addCase(listTeas.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  },
});

export const listTeasApp = (state: RootState) => state.listTeas;
export const listTeaReducer = listTeasSlice.reducer;

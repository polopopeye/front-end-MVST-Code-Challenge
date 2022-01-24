import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import constants from 'src/core/constants';

import type { RootState } from '../../app/store';

export type CoffeeItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  createdAt: Date;
  modifiedAt: Date;
  category?: {
    id: number;
    name: string;
    createAt: Date;
    updateAt: Date;
    coffees?: [string];
  };
};

export type CoffeeState = {
  data: [CoffeeItem?];
  pending: boolean;
  error: boolean;
};

const initialState: CoffeeState = {
  data: [],
  pending: false,
  error: false,
};

export const listCoffees = createAsyncThunk('coffes/list', async () => {
  const response = await axios.get(constants.baseApiUrl + '/coffees/');

  return response.data;
});

export const listCoffeesSlice = createSlice({
  name: 'listCoffees',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(listCoffees.pending, (state) => {
        state.pending = true;
      })
      .addCase(listCoffees.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.data = payload;
      })
      .addCase(listCoffees.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  },
});

export const listCoffeesApp = (state: RootState) => state.listCoffees;
export const listCoffeeReducer = listCoffeesSlice.reducer;

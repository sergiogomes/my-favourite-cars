/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../../app/store';
import { ICar } from '../../interfaces/ICar';
import fetchAPI from './carsAPI';

export interface CarsState {
  list: ICar[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CarsState = {
  list: [],
  status: 'idle',
};

export const addCarAsync = createAsyncThunk(
  'cars/addCar',
  async (car: ICar, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState;
      const { list } = state.cars;
      car.id = list.length > 0 ? list[list.length - 1].id + 1 : 0;

      const response = await fetchAPI(car);

      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  },
);

export const removeCarAsync = createAsyncThunk(
  'cars/removeCar',
  async (car: ICar) => {
    const response = await fetchAPI(car);

    return response.data;
  },
);

export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addCarAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addCarAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.list.push(action.payload);
      })
      .addCase(addCarAsync.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(removeCarAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(removeCarAsync.fulfilled, (state, action) => {
        const { id } = action.payload;
        const carIndex = state.list.findIndex((car) => car.id === id);
        state.list.splice(carIndex, 1);
        state.status = 'idle';
      })
      .addCase(removeCarAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const selectCarList = (state: RootState) => state.cars.list;

export default carsSlice.reducer;

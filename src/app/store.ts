import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import carsReducer from '../features/cars/carsSlice';
import sideBarReducer from '../common/side-bar/sideBarSlice';

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    sideBar: sideBarReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

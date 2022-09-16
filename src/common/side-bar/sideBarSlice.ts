/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../../app/store';

export interface SideBarState {
  visible: boolean;
}

const initialState: SideBarState = {
  visible: false,
};

export const sideBarSlice = createSlice({
  name: 'sideBar',
  initialState,
  reducers: {
    toggle: (state) => {
      state.visible = !state.visible;
    },
  },
});

export const { toggle } = sideBarSlice.actions;

export const selectVisibility = (state: RootState) => state.sideBar.visible;

export default sideBarSlice.reducer;

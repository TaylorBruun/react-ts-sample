import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface RedState {
  value: number;
}

const initialState: RedState = {
  value: 0,
};

export const redSlice = createSlice({
  name: "redClicks",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = redSlice.actions;

export default redSlice.reducer;

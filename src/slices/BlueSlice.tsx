import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface BlueState {
  value: number;
}

const initialState: BlueState = {
  value: 0,
};

export const blueSlice = createSlice({
  name: "blueClicks",
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

export const { increment, decrement } = blueSlice.actions;

export default blueSlice.reducer;

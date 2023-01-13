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
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, reset } = blueSlice.actions;

export default blueSlice.reducer;

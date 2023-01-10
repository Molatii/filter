import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state) => {
      const mystate = state;
      mystate.value += 2;
    },
    decrement: (state) => {
      const mystate = state;
      mystate.value -= 2;
    },
    setCount: (state, action: PayloadAction<number>) => {
      const mystate = state;
      mystate.value += action.payload;
    },
  },
});

// Action creators
export const { setCount, decrement, increment } = countSlice.actions;

export default countSlice.reducer;

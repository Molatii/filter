import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  item: string;
}

const initialState: CounterState = {
  item: "",
};

export const FilterSlice = createSlice({
  name: "productFilter",
  initialState,
  reducers: {
    setFilterItem: (state, action: PayloadAction<string>) => {
      const mystate = state;
      mystate.item = action.payload;
    },
    clearFilterState: (state) => {
      const mystate = state;
      mystate.item = "";
    },
  },
});

// Action creators
export const { setFilterItem, clearFilterState } = FilterSlice.actions;

export default FilterSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessage: (state, action) => {
      const mystate = state;
      mystate.value = action.payload;
    },
    clearMessage: (state) => {
      const mystate = state;
      mystate.item = "";
    },
  },
});

const { reducer, actions } = messageSlice;

export const { setMessage, clearMessage } = actions;
export default reducer;

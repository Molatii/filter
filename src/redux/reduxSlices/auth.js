import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";

import AuthService from "../../services/auth.service";

const user = JSON.parse(localStorage.getItem("user"));

export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ username, email, password }, thunkAPI) => {
    try {
      const response = await AuthService.registerUser(
        username,
        email,
        password,
      );
      thunkAPI.dispatch(setMessage(response.data.message));
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(`error=>${message}`));
      return thunkAPI.rejectWithValue();
    }
  },
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ username, password }, thunkAPI) => {
    try {
      const data = await AuthService.login(username, password);
      return { user: data };
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  },
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await AuthService.logout();
});

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [registerUser.fulfilled]: (state) => {
      const mystate = state;
      mystate.isLoggedIn = false;
    },
    [registerUser.rejected]: (state) => {
      const mystate = state;
      mystate.isLoggedIn = false;
    },
    [login.fulfilled]: (state, action) => {
      const mystate = state;
      mystate.isLoggedInte.isLoggedIn = true;
      mystate.user = action.payload.user;
    },
    [login.rejected]: (state) => {
      const mystate = state;
      mystate.isLoggedIn = false;
      mystate.user = null;
    },
    [logout.fulfilled]: (state) => {
      const mystate = state;
      mystate.isLoggedIn = false;
      mystate.user = null;
    },
  },
});

const { reducer } = authSlice;
export default reducer;

import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import CountReducer from "./reduxSlices/countSlice";
import FilterReducer from "./reduxSlices/filterSlice";
import authReducer from "./reduxSlices/auth";
import messageReducer from "./reduxSlices/message";
import { starWarsApi } from "./reduxSlices/apiSlice";

const store = configureStore({
  reducer: {
    count: CountReducer,
    productFilter: FilterReducer,
    auth: authReducer,
    message: messageReducer,
    [starWarsApi.reducerPath]: starWarsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(starWarsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

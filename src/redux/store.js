import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { saleApi } from "./api/saleApi";
import { rentApi } from "./api/rentApi";

export const store = configureStore({
  reducer: {
    [saleApi.reducerPath]: saleApi.reducer,
    [rentApi.reducerPath]: rentApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saleApi.middleware, rentApi.middleware),
});

setupListeners(store.dispatch);

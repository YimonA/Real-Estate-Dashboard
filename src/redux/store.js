import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { saleApi } from "./api/saleApi";
import { rentApi } from "./api/rentApi";
import SaleSlice from "./services/saleSlice";
import RentSlice from "./services/rentSlice";
import { authApi } from './api/authApi';
import authSlice from './services/authSlice';


export const store = configureStore({
  reducer: {
    [saleApi.reducerPath]: saleApi.reducer,
    [rentApi.reducerPath]: rentApi.reducer,
    [authApi.reducerPath] : authApi.reducer,
    authSlice: authSlice,
    SaleSlice:SaleSlice,
    RentSlice:RentSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saleApi.middleware, rentApi.middleware,authApi.middleware),
});

setupListeners(store.dispatch);

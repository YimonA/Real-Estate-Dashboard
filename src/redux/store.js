import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { saleApi } from "./api/saleApi";
import { rentApi } from "./api/rentApi";
import SaleSlice from "./services/saleSlice";
import RentSlice from "./services/rentSlice";


export const store = configureStore({
  reducer: {
    [saleApi.reducerPath]: saleApi.reducer,
    [rentApi.reducerPath]: rentApi.reducer,
    SaleSlice:SaleSlice,
    RentSlice:RentSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saleApi.middleware, rentApi.middleware),
});

setupListeners(store.dispatch);

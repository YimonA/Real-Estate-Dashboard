import { createSlice } from "@reduxjs/toolkit";
//import Cookies from "js-cookie";

const initialState = {
  sale: [],
  searchTerm: "",
};

export const saleSlice = createSlice({
  name: "saleSlice",
  initialState,
  reducers: {
    addSale:(state,{payload})=>{
        state.sale=payload;
    },
    setSearchTerm:(state,{payload})=>{
        state.searchTerm=payload;
    }
  },
});

export const {addSale,setSearchTerm} = saleSlice.actions;
export default saleSlice.reducer;

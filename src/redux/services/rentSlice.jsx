import { createSlice } from "@reduxjs/toolkit";
//import Cookies from "js-cookie";

const initialState = {
  rent: [],
  searchTerm: "",
};

export const rentSlice = createSlice({
  name: "rentSlice",
  initialState,
  reducers: {
    addRent:(state,{payload})=>{
        state.rent=payload;
    },
    setSearchTerm:(state,{payload})=>{
        state.searchTerm=payload;
    }
  },
});

export const {addRent,setSearchTerm} = rentSlice.actions;
export default rentSlice.reducer;

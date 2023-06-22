import { createSlice } from "@reduxjs/toolkit";
//import Cookies from "js-cookie";

const initialState = {
  rent: [],
  rentSearchTerm: "",
};

export const rentSlice = createSlice({
  name: "rentSlice",
  initialState,
  reducers: {
    addRent:(state,{payload})=>{
        state.rent=payload;
    },
    setRentSearchTerm:(state,{payload})=>{
        state.rentSearchTerm=payload;
    }
  },
});

export const {addRent,setRentSearchTerm} = rentSlice.actions;
export default rentSlice.reducer;

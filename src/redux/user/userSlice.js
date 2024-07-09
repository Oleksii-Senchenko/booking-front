import { createSlice } from "@reduxjs/toolkit";
import {  getCurrency } from "./userOperation";

export const userSlice = createSlice({
  name: "user",
  initialState: {
   currency: null
  },
  extraReducers(builder) {
    builder.addCase(getCurrency.fulfilled, (state, action) => {
      state.currency = action.payload;
    });
   
  },
});


export default userSlice.reducer;

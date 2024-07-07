import {  createAsyncThunk } from "@reduxjs/toolkit";

export const increment = createAsyncThunk(
    'user/increment',
    async (num) => {

      const response = await new Promise((resolve) =>
        setTimeout(() => resolve(num), 1000)
      );
      return response;
    }
  );

// export const increment = createAsyncThunk(
//   "user/increment",
//   async (num, thunkAPI) => {

//     const responce = await setTimeout(()=> num, 1000)
//     return responce
//   }
// );
export const decrement = createAsyncThunk(
  "user/decrement",
  async (num, thunkAPI) => {

    const responce = await setTimeout(()=> num, 1000)
    return responce
  }
);

// export const { increment, decrement, incrementByAmount } = userSlice.actions;

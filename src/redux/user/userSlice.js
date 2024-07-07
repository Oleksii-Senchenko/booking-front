import { createSlice } from "@reduxjs/toolkit";
import { decrement, increment } from "./userOperation";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: 0,
  },
  extraReducers(builder) {
    builder.addCase(increment.fulfilled, (state, action) => {
      state.value += action.payload;
    });
    builder.addCase(decrement.fulfilled, (state, action) => {
      state.value += action.payload;
    });
  },
});

// export const { increment, decrement, incrementByAmount } = userSlice.actions;

export default userSlice.reducer;

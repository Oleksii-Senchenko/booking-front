import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiKey = process.env.REACT_APP_CURRENCY_API_KEY;

export const getCurrency = createAsyncThunk("user/currency", async (curr) => {
  const responce = await axios.get(
    `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${curr}`
  );
  if (!responce) {
    console.log("Ba");
  }
  return responce.data.conversion_rates;
});


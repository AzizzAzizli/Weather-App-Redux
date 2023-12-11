import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getWeatherData } from "../util/getWeather";
export const getPrognos = createAsyncThunk("/getPrognos", getWeatherData);

const initialState = {
  weather: {},
  loading: false,
  error: "",
};

export const weatherSlice = createSlice({
  name: "weatherRedux",
  initialState,
 
  extraReducers: (builder) => {
    builder
      .addCase(getPrognos.fulfilled, (state, action) => {
        state.weather = action.payload;
        state.loading = false;
      })
      .addCase(getPrognos.pending, (state, action) => {
        
        state.loading = true;
      })
      .addCase(getPrognos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default weatherSlice.reducer;

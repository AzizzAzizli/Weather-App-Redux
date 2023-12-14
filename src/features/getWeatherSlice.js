import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getWeatherData } from "../util/getWeather";

export const getWeather = createAsyncThunk("/getWeather", getWeatherData);

const initialState = {
  weather: {},
  loading: false,
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWeather.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.weather = action.payload;
      })
      .addCase(getWeather.rejected, (state, action) => {
        state.loading = false;
      });
  },
});



export default weatherSlice.reducer;

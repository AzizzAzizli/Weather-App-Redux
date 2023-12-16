import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getWeatherData } from "../util/getWeather";

export const getWeather = createAsyncThunk("/getWeather", getWeatherData);

const initialState = {
  weather: {},
  loading: true,
  error: "",
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
        if (action.payload.cod === "404") {
          state.error = "city not found";
        }
        state.loading = false;
        state.weather = action.payload;
      })
      .addCase(getWeather.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default weatherSlice.reducer;

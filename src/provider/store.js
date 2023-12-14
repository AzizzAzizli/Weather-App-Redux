import { configureStore } from '@reduxjs/toolkit'
import weatherSlice  from '../features/getWeatherSlice'

export const store = configureStore({
    reducer: {
        weather: weatherSlice,
  },
})
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { getPrognos } from "./features/getWeatherSlice";
// https://api.openweathermap.org/data/2.5/weather?q=baku&apikey=d32bd17e782e54a0729a829c462c76ac
function App() {
  const dispatch = useDispatch();

  // dispatch(getPrognos());
  useEffect(() => {
    dispatch(getPrognos("London"));
  }, [dispatch]);

  const weather = useSelector((state) => state.weatherRedux.weather);
  console.log(weather);
  return (
    <>
     
    </>
  );
}

export default App;

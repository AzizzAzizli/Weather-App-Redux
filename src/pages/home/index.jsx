import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "../../features/getWeatherSlice";
import { Nav } from "../../components/Nav";
import { date } from "../../util/getDate";
import { hour } from "../../util/getHour";
export const HomePage = () => {
  // const [currentHour, setCurrentHour] = useState("");

  const weather = useSelector((state) => state.weather.weather);

  console.log(weather);

  // setInterval(() => {
  //   let cHour = hour();
  //   setCurrentHour(cHour);
  // }, 1000);

  // console.log(currentHour);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWeather());
  }, [dispatch]);



  return (
    <div>
      <Nav />
      <div className=" container  ">
        
        <div className=" d-flex justify-content-center gap-3">
          <input type="search" className=" rounded-4 border-primary w-25 " />
          <button className="btn btn-primary">Search</button>
        </div>
        <main>
          <div className=" d-flex justify-content-center p-5 ">
            <div
              style={{ height: "300px", width: "250px" }}
              className=" rounded-4 p-3 bg-secondary"
            >
              <p className=" h1 text-center  text-black">
                {(weather?.main?.temp - 273.15).toFixed("1")}°C
              </p>
              <p className="fs-3 text-center">{weather?.weather[0]?.main}</p>
              <div className=" d-flex justify-content-between fs-4 fw-medium">
                <p>{weather?.name}</p> <p>{date()}</p>
              </div>
              <div className="d-flex justify-content-between fs-5 fw-normal">
                <p>Light Rain</p>
                {/* <p>{currentHour}</p> */}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

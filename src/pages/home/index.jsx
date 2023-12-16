import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "../../features/getWeatherSlice";
import { Nav } from "../../components/Nav";
import { date } from "../../util/getDate";
import { Hours } from "../../components/Hour";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const HomePage = () => {
  const inputRef = useRef();

  const weather = useSelector((state) => state.weather.weather);
  const loading = useSelector((state) => state.weather.loading);
  const error = useSelector((state) => state.weather.error);
  console.log(error);

  // console.log(loading);
  // console.log(weather);

  const dispatch = useDispatch();

  function handleWeather() {
    const value = inputRef.current.value;
    if (!value) {
      toast.error("Please enter a city name");
      return;
    }
    dispatch(getWeather(value));
    inputRef.current.value = "";
  }

  useEffect(() => {
    dispatch(getWeather());
  }, []);

  return (
    <div className=" bg-blue-100 h-screen">
      <ToastContainer />
      <Nav />
      {loading ? (
        <div className=" flex justify-center mt-[10rem]">
          <div
            className="inline-block   h-16 w-16 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      ) : (
        <div className="flex gap-32  p-4 bg-blue-100 h-screen">
          <div className=" w-4/12 bg-slate-500 h-full rounded-lg p-4">
            <div className=" flex gap-2 mb-4">
              {" "}
              <input
                ref={inputRef}
                placeholder="Search..."
                type="search"
                className=" rounded-lg w-8/12 p-1"
              />{" "}
              <button
                onClick={handleWeather}
                className=" bg-blue-700 p-1 rounded-lg"
              >
                Search
              </button>
            </div>
            <div>
              <p className="font-bold  text-4xl text-center">
                {weather?.name}{" "}
              </p>
              <div className=" flex justify-between">
                <p className=" font-medium text-3xl">
                  {(weather?.main?.temp - 273.15)?.toFixed("1")}°C
                </p>
                <p className=" font-medium text-xl  items-start">{date()}</p>
              </div>
              <div className=" flex justify-between">
                <p className="font-medium text-xl">
                  {weather?.weather?.[0].main}
                </p>{" "}
                <p className="font-medium text-xl"> {<Hours />}</p>
              </div>
            </div>
          </div>
          <div className=" w-8/12 bg-slate-500 h-full rounded-lg p-5"></div>
        </div>
      )}
    </div>
  );
};

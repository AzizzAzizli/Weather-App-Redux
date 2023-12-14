export const getWeatherData = async (city = "Baku") => {
  let res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&apikey=d32bd17e782e54a0729a829c462c76ac`
  );

  let data = await res.json();
  return data;
};

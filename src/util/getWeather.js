export const getWeatherData= async (city = "Baku") => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d32bd17e782e54a0729a829c462c76ac`;

    const res = await fetch(url);
    const data = await res.json();

    return data;
  }
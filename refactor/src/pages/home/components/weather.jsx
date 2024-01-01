import { useState, useEffect } from "react";
import { getWeatherData } from "../../../apis/weather";

const Weather = () => {
  const [weather, setWeather] = useState();

  const fetchWeather = async () => {
    try {
      const weatherData = await getWeatherData();
      setWeather(weatherData);
    } catch (err) {
      console.log(err);
      throw new Error("failed to load weather api"); // 404
    }
  };

  useEffect(() => {
    fetchWeather();
    console.log({ weather });
  }, []);

  return (
    <>
      <h1>Home Page</h1>
      <p>오늘의 기온</p>
      <p>{weather?.find((el) => el.category === "T1H").obsrValue}도</p>
    </>
  );
};

export default Weather;

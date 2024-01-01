import { weatherAxiosInstance } from "./core";

export const getWeatherData = async () => {
  const res = await weatherAxiosInstance().get("/getUltraSrtNcst", {
    params: {
      serviceKey: import.meta.env.VITE_APP_WEATHER_SECRET_KEY,
      dataType: "JSON",
      base_date: new Date().toISOString().substring(0, 10).replace(/-/g, ""),
      base_time: "0600",
      nx: 60,
      ny: 127,
    },
  });
  return res.data.response.body.items.item;
};

import axios from "axios";

const baseURL = "/api";

export const axiosInstance = () => {
  return axios.create({
    baseURL: baseURL,
  });
};

export const weatherAxiosInstance = () => {
  return axios.create({
    baseURL: import.meta.env.VITE_APP_WEATHER_BASEURL,
  });
};

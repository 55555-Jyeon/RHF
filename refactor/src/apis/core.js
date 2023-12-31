import axios from "axios";

const baseURL = "/api";

export const axiosInstance = () => {
  return axios.create({
    baseURL: baseURL,
    withCredentials: true,
  });
};

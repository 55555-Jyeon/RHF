import axios from "axios";

const baseURL = "/"; // .env 파일에 정의 후 사용하기

export const axiosInstance = () => {
  return axios.create({
    baseURL: baseURL,
    headers: {
      Authorization: `토큰`,
    },
    withCredentials: true,
  });
};

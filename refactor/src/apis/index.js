import { axiosInstance } from "./core";

export const getCommentPageNation = async (params) => {
  const res = await axiosInstance.get("/comments", { params });
  return res;
};

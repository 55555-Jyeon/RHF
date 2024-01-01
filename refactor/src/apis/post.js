import { axiosInstance } from "./core";

export const getCommentData = async (paramsData) => {
  const res = await axiosInstance().get("/comments", {
    params: {
      page: paramsData.page,
      take: paramsData.take,
      limit: paramsData.limit,
    },
  });
  return res.data;
};

export const getPostData = async (paramsData) => {
  const res = await axiosInstance().get("/posts", {
    params: {
      page: paramsData.page,
      take: paramsData.take,
      limit: paramsData.limit,
    },
  });
  return res.data;
};

export const getDetailPostData = async () => {
  const res = await axiosInstance().get("/post");
  return res.data;
};

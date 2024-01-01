import { useEffect, useState } from "react";
import { getDetailPostData } from "../../../apis/post";

const DetailPost = () => {
  const [postDetail, setPostDetail] = useState([]);

  const fetchPostDetail = async () => {
    const detailPostData = await getDetailPostData();
    setPostDetail(detailPostData);
  };

  useEffect(() => {
    fetchPostDetail();
  }, []);

  return (
    <>
      <p>제목: {postDetail?.title}</p>
      <p>내용: {postDetail?.content}</p>
    </>
  );
};

export default DetailPost;

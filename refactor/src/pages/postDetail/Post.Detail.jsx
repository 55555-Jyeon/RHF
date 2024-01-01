import { useEffect } from "react";
import CommentList from "./components/commentList";
import DetailPost from "./components/detailPost";

const PostDetailPage = () => {
  useEffect(() => {
    const userName = localStorage.getItem("userName");
    if (!userName) {
      alert("로그인이 필요합니다");
      window.location.href = "/";
    }
  }, []);

  return (
    <>
      <DetailPost />
      <CommentList />
    </>
  );
};
export default PostDetailPage;

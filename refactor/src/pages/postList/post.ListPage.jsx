import { useEffect } from "react";
import PostList from "./components/postList";

const PostListPage = () => {
  useEffect(() => {
    const userName = localStorage.getItem("userName");
    if (!userName) {
      alert("로그인이 필요합니다");
      window.location.href = "/";
    }
  }, []);

  return (
    <table>
      <caption>Post List Page</caption>
      <tr>
        <th>제목</th>
        <th>내용</th>
        <th>작성자</th>
      </tr>
      <PostList />
    </table>
  );
};
export default PostListPage;

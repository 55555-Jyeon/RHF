import axios from "axios";
import { useEffect, useState } from "react";
import PostPageNation from "../components/pagenation/Pagenation.Post";
import { useSearchParams } from "react-router-dom";
import { DialLogState, useDiaLogStore } from "../contexts/DiaLogProvider";

const LIMIT_TAKE = 10;
const PostListPage = () => {
  const [params] = useSearchParams();
  const [postList, setPostList] = useState([]);
  const [, setDiaLogAttribute] = useDiaLogStore();

  const fetchPostList = async () => {
    const response = await axios.get("/api/posts", {
      params: {
        take: params.get("take") ?? LIMIT_TAKE,
      },
    });
    setPostList(response.data.Posts);
  };

  useEffect(() => {
    const userName = localStorage.getItem("userName");
    if (!userName) {
      alert("로그인이 필요합니다");
      window.location.href = "/";
    }
  }, []);

  useEffect(() => {
    fetchPostList();
  }, [params]);

  const onClickPost = async (postId) => {
    await setDiaLogAttribute({
      type: DialLogState.CONFIRM,
      text: "정말로 페이지를 이동하겠습니까",
      isOpen: true,
      onConfirm: async () => {
        await setDiaLogAttribute({
          text: "정말로 이동해버린다요!",
          onConfirm: async () => {
            window.location.href = `/post-detail/${postId}`;
          },
        });
      },
      onCancel: () => {
        setDiaLogAttribute({ isOpen: false });
      },
    });
  };

  return (
    <table>
      <caption>Post List Page</caption>
      <tr>
        <th>제목</th>
        <th>내용</th>
        <th>작성자</th>
      </tr>
      {postList.map((post) => (
        <tr key={post.id} onClick={() => onClickPost(post.id)}>
          <td>{post.title}</td>
          <td>{post.content}</td>
          <td>{post.User.nickName}</td>
        </tr>
      ))}
      <PostPageNation />
    </table>
  );
};
export default PostListPage;

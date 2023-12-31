import axios from "axios";
import { useEffect, useState } from "react";
import CommentPageNation from "../components/pagenation/Pagenation.Comment";
import { useSearchParams } from "react-router-dom";

const LIMIT_TAKE = 20;
// 전역으로 관리.

const PostDetailPage = () => {
  const [params] = useSearchParams();
  const [postDetail, setPostDetail] = useState([]);
  const [commentList, setCommentList] = useState([]);
  const [isOpenCommentList, setIsOpenCommentList] = useState(false);

  const fetchPostDetail = async () => {
    const response = await axios.get("/api/post");
    setPostDetail(response.data);
  };
  /*
    http 요청 함수 분리.
  */

  const fetchComments = async () => {
    const response = await axios.get("/api/comments", {
      params: {
        take: params.get("take") ?? LIMIT_TAKE,
      },
    });
    console.log(response.data);
    setCommentList(response.data.Comments);
  };

  const onClickMoreComments = async () => {
    setIsOpenCommentList(true);
    fetchComments();
  };
  // 왜 비동기로 했징..?

  const onClickHiddenComments = () => {
    setIsOpenCommentList(false);
  };

  useEffect(() => {
    const userName = localStorage.getItem("userName");
    if (!userName) {
      alert("로그인이 필요합니다");
      window.location.href = "/";
    }
    fetchPostDetail();
  }, []);

  useEffect(() => {
    if (!isOpenCommentList) return;
    fetchComments();
  }, [params]);

  return (
    <div>
      <h1>Post Detail Page</h1>
      <div>
        <p>제목: {postDetail.title}</p>
        <p>내용: {postDetail.content}</p>
        {!isOpenCommentList && (
          <button onClick={onClickMoreComments}>댓글 보기</button>
        )}
        {isOpenCommentList && (
          <button onClick={onClickHiddenComments}>댓글 숨기기</button>
        )}
        {isOpenCommentList && (
          <>
            {commentList.map((comment) => (
              <div key={comment.id}>
                <p>{comment.content}</p>
                <p>{comment.User.nickName}</p>
              </div>
            ))}
            <CommentPageNation />
          </>
        )}
      </div>
    </div>
  );
};
export default PostDetailPage;

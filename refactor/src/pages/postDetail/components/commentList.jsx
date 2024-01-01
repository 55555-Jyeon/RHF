import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import PaginationConfig from "../../../consts/pagenation.config";
import PagenationBtn from "../../../components/pagenation/pagenation.button";
import OneComment from "./oneComment";
import { getCommentData } from "../../../apis/post";

const CommentList = () => {
  const [params, setParams] = useSearchParams();
  const [pageNation, setPageNation] = useState();
  const [commentList, setCommentList] = useState([]);
  const [isOpenCommentList, setIsOpenCommentList] = useState(false);

  const { LIMIT_PAGE, LIMIT_TAKE } = PaginationConfig;

  const paramsData = {
    page: params.get("page") ?? 1,
    take: params.get("take") ?? LIMIT_TAKE,
    limit: params.get("limit") ?? LIMIT_PAGE,
  };

  const fetchComments = async () => {
    const data = await getCommentData(paramsData);
    setCommentList(data.Comments);
    setPageNation(data.PageNation);
  };

  useEffect(() => {
    if (!isOpenCommentList) return;
    fetchComments();
  }, [params]);

  const onClickOpenCloseComments = () => {
    setIsOpenCommentList((prev) => !prev);
    fetchComments();
  };

  return (
    <>
      {isOpenCommentList ? (
        <button onClick={onClickOpenCloseComments}>댓글 숨기기</button>
      ) : (
        <button onClick={onClickOpenCloseComments}>댓글 보기</button>
      )}

      {isOpenCommentList && commentList && pageNation && (
        <>
          {commentList.map((comment) => (
            <OneComment
              key={comment.id}
              content={comment.content}
              nickName={comment.User.nickName}
            />
          ))}
          <PagenationBtn
            startPage={pageNation?.startPage}
            currentPage={pageNation?.currentPage}
            totalPage={pageNation?.totalPage}
            endPage={pageNation?.endPage}
            setParams={setParams}
            LIMIT_PAGE={LIMIT_PAGE}
          />
        </>
      )}
    </>
  );
};
export default CommentList;

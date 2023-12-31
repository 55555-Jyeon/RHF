import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getCommentPageNation } from "../../apis";
import PagenationBtn from "../pagenation.button";

const LIMIT_PAGE = 10;
const LIMIT_TAKE = 20;
/*
  const LIMIT_PAGE = 10;
  const LIMIT_TAKE = 20;
  다른 컴포넌트에서도 재사용 될 수 있는 값이니 전역으로 관리.
*/

const CommentPageNation = () => {
  const [params, setParams] = useSearchParams();
  const [pageNation, setPageNation] = useState();

  const param = {
    page: params.get("page") ?? 1,
    take: params.get("take") ?? LIMIT_TAKE,
    limit: params.get("limit") ?? LIMIT_PAGE,
  };

  const fetchCommentPageNation = useCallback(() => {
    const response = getCommentPageNation(param);

    const pageNation = response.data.PageNation;

    setPageNation({
      ...pageNation,
    });
  }, [params]);

  useEffect(() => {
    fetchCommentPageNation();
  }, [fetchCommentPageNation, params]);

  // const onClickPage = (page) => {
  //   setParams({
  //     page,
  //   });
  // };

  return (
    pageNation && (
      <PagenationBtn
        startPage={pageNation?.startPage}
        currentPage={pageNation?.currentPage}
        totalPage={pageNation?.totalPage}
        endPage={pageNation?.endPage}
      />
    )
  );
};
export default CommentPageNation;

/*

    return (
    <div>
      {isPrevPageVisible && (
        <button onClick={() => setParams({ page: pageNation.startPage - 1 })}>
          이전
        </button>
      )}
      {pageNation &&
        Array(pageNation.endPage - pageNation.startPage + 1)
          .fill()
          .map((_, i) => pageNation.startPage + i)
          .map((page) => (
            <button key={page} onClick={() => onClickPage(page)}>
              {page}
            </button>
          ))}
      {isNextPageVisible && (
        <button onClick={() => setParams({ page: pageNation.endPage + 1 })}>
          다음
        </button>
      )}
    </div>
  );

  댓글 뿐만 아니라 일반 리스트 파일에서도 동일한 코드를 사용함.
  재사용성을 위해 분리해서 리팩토링하기
*/

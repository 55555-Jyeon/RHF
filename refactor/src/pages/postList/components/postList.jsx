import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import PaginationConfig from "../../../consts/pagenation.config";
import { getPostData } from "../../../apis/post";
import PagenationBtn from "../../../components/pagenation/pagenation.button";
import OnePost from "./onePost";

const PostList = () => {
  const [params, setParams] = useSearchParams();
  const [postList, setPostList] = useState([]);
  const [pageNation, setPageNation] = useState();

  const { LIMIT_PAGE, LIMIT_TAKE } = PaginationConfig;

  const paramsData = {
    page: params.get("page") ?? 1,
    take: params.get("take") ?? LIMIT_TAKE,
    limit: params.get("limit") ?? LIMIT_PAGE,
  };

  const fetchPostList = async () => {
    const data = await getPostData(paramsData);
    setPostList(data.Posts);
    setPageNation(data.PageNation);
  };

  useEffect(() => {
    fetchPostList();
  }, [params]);

  return (
    postList &&
    pageNation && (
      <>
        {postList.map((post) => (
          <OnePost
            key={post.id}
            title={post.title}
            content={post.content}
            nickName={post.User.nickName}
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
    )
  );
};

export default PostList;

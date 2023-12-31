import { rest } from "msw";
import {
  definePostComment,
  definePostDetail,
  definePostList,
} from "../data/post.data";
import handlePage from "../../util/handle-page";

export const getPostList = rest.get("/api/posts", async (req, res, ctx) => {
  const page = req.url.searchParams.get("page");
  const limit = req.url.searchParams.get("limit");
  const take = req.url.searchParams.get("take");
  const count = 486;

  const PageNation = handlePage(page, limit, take, count);

  return res(
    ctx.status(200),
    ctx.json({
      PageNation,
      Posts: definePostList(parseInt(take)),
    })
  );
});

export const getPostDetail = rest.get("/api/post", (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(definePostDetail));
});

export const getCommentList = rest.get(
  "/api/comments",
  async (req, res, ctx) => {
    const page = req.url.searchParams.get("page");
    const limit = req.url.searchParams.get("limit");
    const take = req.url.searchParams.get("take");
    const count = 311;

    const PageNation = handlePage(page, limit, take, count);

    return res(
      ctx.status(200),
      ctx.json({
        PageNation,
        Posts: definePostList(parseInt(take)),
      })
    );
  }
);

/*
  ### api요청 로직과 페이지 네이션 로직 구분하기.

  페이지네이션 관련 코드를 유틸 함수로 분리해서 api요청 로직만 남을 수 있도록 리팩토링 하기.

*/

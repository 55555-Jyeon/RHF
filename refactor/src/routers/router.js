import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/home";
import PostListPage from "../pages/postList/post.ListPage";
import PostDetailPage from "../pages/postDetail/Post.Detail";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/posts", element: <PostListPage /> },
  { path: "/post-detail/:postId", element: <PostDetailPage /> },
]);

export default router;

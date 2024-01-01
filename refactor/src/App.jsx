import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { worker } from "./__mock__/browser";
import DiaLogProvider from "./contexts/DiaLogProvider";
import HomePage from "./pages/home/home";
import PostListPage from "./pages/postList/post.ListPage";
import PostDetailPage from "./pages/postDetail/Post.Detail";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/posts", element: <PostListPage /> },
    { path: "/post-detail/:postId", element: <PostDetailPage /> },
  ]);
  worker.start();

  return (
    <DiaLogProvider>
      <RouterProvider router={router} />
    </DiaLogProvider>
  );
}

export default App;

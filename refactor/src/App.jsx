import { RouterProvider, createBrowserRouter } from "react-router-dom";

import PostDetailPage from "./pages/Post.detail";
import "./app.css";
import HomePage from "./pages/Home";

import { worker } from "./__mock__/browser";
import DiaLogProvider from "./contexts/DiaLogProvider";
import PostListPage from "./pages/Post.List";

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

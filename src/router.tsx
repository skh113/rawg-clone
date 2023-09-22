import { createBrowserRouter } from "react-router-dom";
import GameDetailPage from "./pages/GameDetailPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import Layout from "./pages/Layout.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "games",
        element: <GameDetailPage />,
        children: [{ path: ":id", element: <GameDetailPage /> }],
      },
    ],
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import GameDetailPage from "./pages/GameDetailPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import Layout from "./pages/Layout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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

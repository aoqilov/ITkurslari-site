import { lazy } from "react";

const Home = lazy(() => import("pages/home"));
const Info = lazy(() => import("pages/info"));

const authRoutes = [];

const privateRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/info",
    element: <Info />,
  },
];

export { authRoutes, privateRoutes };

import {
  Home,
  GameContainer,
} from "./";

export const AppRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/game",
    element: <GameContainer />,
  },
];
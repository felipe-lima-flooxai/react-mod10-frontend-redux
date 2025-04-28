import React from "react";
import {
  createHashRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Todo from "./todo/todo";
import About from "./about/about";

const router = createHashRouter([
  {
    path: "/",
    element: <Navigate to="/todo" />, // redireciona raiz para /todo
  },
  {
    path: "/todo",
    element: <Todo />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "*",
    element: <Navigate to="/todo" />, // fallback pra qualquer rota desconhecida
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;

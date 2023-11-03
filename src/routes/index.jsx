import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { routesItem, beforeLogin } from "./routesItem";
const MainRoutes = () => {
  const { isAuth } = useContext(AuthContext);

  const router = createBrowserRouter(isAuth ? routesItem : beforeLogin);

  return <RouterProvider router={router} />;
};
export default MainRoutes;
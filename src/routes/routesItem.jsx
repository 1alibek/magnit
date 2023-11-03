import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import BasketPage from "../pages/BasketPage";
import { Heading } from "@chakra-ui/react";
import Product from "../pages/product/Product";
import Login from "../components/Login";
import Register from "../components/Register";
import { Navigate } from "react-router-dom";
import Liked from "../components/Liked";
import SearchCard from "../components/SearchCard";

export const routesItem = [
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/product/",
        element: <Navigate to={"/"} />,
      },
     

      {
        path: "/basket",
        element: <BasketPage />,
      },
      {
        path: "/search",
        element: <SearchCard />,
      },
  
      {
        path: "/like",
        element:<Liked/>
      },
      {
        path: "*",
        element: <Heading>saxifa topilmadi</Heading>,
      },
    ],
  },
];

export const beforeLogin = [
  {
    path: "/",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <Heading>saxifa topilmadi</Heading>,
  },
];
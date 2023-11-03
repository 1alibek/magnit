import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";

import BasketProvider from "./context/BasketContext";
import ModalProvider from "./context/ModalContext";
import AuthProvider from "./context/AuthContext";
import MainRoutes from "./routes";
import LikedProvider from "./context/LikedContext";
import SearchProvider from "./context/SearchContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ChakraProvider>
      <SearchProvider>
      <ModalProvider>
        <BasketProvider>
          <LikedProvider>
            <MainRoutes />
          </LikedProvider>
        </BasketProvider>
      </ModalProvider>
      </SearchProvider>
    </ChakraProvider>
  </AuthProvider>
);

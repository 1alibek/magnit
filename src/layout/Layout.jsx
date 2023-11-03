import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import { Box, Container } from "@chakra-ui/react";
import Filter from "./Header/filter/Filter";
import Basket from "../components/Basket";
import Footer from "./footer/Footer";

const Layout = () => {
  return (
    <Container maxW={"1300px"}>
      <header>
        <Header />
        <Container p={"10px 20px"} display={{ base: "block", sm: "none" }}>
          <Filter />
        </Container>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </Container>
  );
};

export default Layout;

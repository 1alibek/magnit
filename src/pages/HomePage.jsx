import { Container } from "@chakra-ui/react";
import Carousel from "../components/Carousel/Carousel";
import HotSale from "../components/HotSale";

const HomePage = () => {
  return (
    <Container maxW={"1300px"} px={"20px"}>
      <Carousel />
      <HotSale />
    </Container>
  );
};
export default HomePage;

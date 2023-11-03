import { useEffect, useState, useContext } from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  VStack,
  HStack,
  Tooltip,
} from "@chakra-ui/react";
import { sofaService } from "../service/sofaService";
import { BasketContext } from "../context/BasketContext";
import { Heart } from "@styled-icons/bootstrap/Heart";
import { Link, useNavigate } from "react-router-dom";
import { Basket } from "@styled-icons/ionicons-sharp/Basket";
import MainModal from "../pages/Modal";
import { ModalContext } from "../context/ModalContext";
import { LikedContext } from "../context/LikedContext";
const HotSale = () => {
  const { setProductToStorage } = useContext(BasketContext);
  const { setProductToStoragee } = useContext(LikedContext);
  const { openModal } = useContext(ModalContext);
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    sofaService.getProduct().then((response) => setProduct(response.products));
  }, []);

  const addToBasket = (item) => {
    setProductToStorage(item);
  };
  const addToLikes = (item) => {
    setProductToStoragee(item);
  };

  return (
    <Box mt={"35px"}>
      <Grid
        templateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(2,1fr)",
          lg: "repeat(3,1fr)",
          xl: "repeat(4,1fr)",
        }}
        gap={"20px"}
      >
        {product.map((item) => {
          return (
            <GridItem
              boxShadow={"0px 5px 10px 2px rgba(34,60,80,0.2)"}
              height={"fit-content"}
              key={item.id}
            >
              <Box height={"100%"}>
                <Link>
                  <Button onClick={() => addToLikes(item)}>
                    <Heart width={20} height={20} />
                  </Button>
                </Link>
                <Image
                  onClick={() => navigate(`/product/${item.id}`)}
                  cursor={"pointer"}
                  src={item.images[0]}
                  width={"100%"}
                  objectFit={"cover"}
                  height={"250px"}
                />
                <VStack p={"10px"} alignItems={"start"}>
                  <Heading className="product-card__title" size={"sm"}>
                    {item.title}
                  </Heading>
                  <Text className="product-card__description">
                    {item.description}
                  </Text>
                  <Text as={"b"}>${item.price?.toLocaleString()}</Text>
                </VStack>
              </Box>
              <Box p={"10px"}>
                <HStack>
                  <Button
                    w={"55px"}
                    onClick={() => addToBasket(item)}
                    // color="#606c38"
                    p={4}
                    color='white'
                    fontWeight='bold'
                    borderRadius='md'
                    bgGradient='linear(to-r, teal.500, green.500)'
                    _hover={{
                      bgGradient: 'linear(to-r, red.500, white.500)',
                    }}
                  >
                    <Tooltip label="basket" hasArrow>
                      <Basket
                        width={25}
                        height={25}
                        position={""}
                        color="#606c38"
                      />
                    </Tooltip>
                  </Button>
                  <Button
                    onClick={() => openModal(item)}
                    color="#606c38"
                    variant={"outline"}
                    maxW={"100%"}
                  >
                    В рассрочку
                  </Button>
                  <MainModal />
                </HStack>
              </Box>
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};

export default HotSale;

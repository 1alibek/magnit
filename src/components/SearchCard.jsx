import React, { useContext } from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  Grid,
  Input,
  GridItem,
  Heading,
  Image,
  Text,
  VStack,
  Tooltip,
  CircularProgress,
  HStack,
} from "@chakra-ui/react";
import { AddShoppingCart } from "@styled-icons/material/AddShoppingCart";
import { Searchcontext } from "../context/SearchContext";
import { Link } from "react-router-dom";
import { Heart } from "styled-icons/bootstrap";
import { Basket } from "styled-icons/ionicons-sharp";

const SearchCard = () => {
  const { store, search, setInputData } = useContext(Searchcontext);

  return (
    <Box display={"flex"} alignItems={"center"}>
      {/* <Grid
        templateColumns={{
          base: "repeat(1,1fr)",

          sm: "repeat(2,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(4,1fr)",
          xl: "repeat(5,1fr)",
          "2xl": "repeat(6,1fr)",
        }}
        gap={"10px"}
      >
        {store.map((item) => {
          return (
            <GridItem  boxShadow={"0px 5px 10px 2px rgba(34,60,80,0.2)"}
          height={"fit-content"} key={item.id}>
              <Box height={"100%"}>
                <Box 
                >
                  <Image
                    src={item.thumbnail}
                    width={"100%"}
                    objectFit={"cover"}
                    height={"250px"}
                  />
                </Box>
                <VStack p={"10px"} alignItems={"start"}>
                  <Heading className="product-card__title" size={"sm"}>
                    {item.title}
                  </Heading>
                  <Text className="product-card__description">
                    {item.description}
                  </Text>
                  <Box display={"flex"} gap={"90px"} px={"10px "}>
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                      gap={"100px"}
                    >
                      <Text as={"b"}>${item.price?.toLocaleString()}</Text>
                    </Box>
                    <Box p={"10px"}>
                      <Tooltip
                        label="       в корзину"
                        hasArrow
                        background={"#1bc5bd"}
                      >
                        <AddShoppingCart
                          width={25}
                          height={25}
                          color={"#1bc5bd"}
                          // onClick={() => addToBasket(item)}
                        />
                      </Tooltip>
                    </Box>
                  </Box>
                </VStack>
                <Box display={"flex"} justifyContent={"center"} pb={"10px"}>
                  <Button
                    colorScheme="twitter"
                    background={"#1bc5bd"}
                    color={"white"}
                    // onClick={() => openModal(item)}
                    width={"80%"}
                  >
                    купить
                  </Button>
                </Box>
              </Box>
            </GridItem>
          );
        })}
      </Grid> */}
       <Grid
        templateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(2,1fr)",
          lg: "repeat(3,1fr)",
          xl: "repeat(4,1fr)",
        }}
        gap={"20px"}
      >
        {store.map((item) => {
          return (
            <GridItem
              boxShadow={"0px 5px 10px 2px rgba(34,60,80,0.2)"}
              height={"fit-content"}
              key={item.id}
            >
              <Box height={"100%"}>
                <Link>
                  <Button >
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
                    // onClick={() => addToBasket(item)}
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
                    // onClick={() => openModal(item)}
                    color="#606c38"
                    variant={"outline"}
                    maxW={"100%"}
                  >
                    В рассрочку
                  </Button>
                  {/* <MainModal /> */}
                </HStack>
              </Box>
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};

export default SearchCard;
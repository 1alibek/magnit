import { useContext, useState } from "react";
import { BasketContext } from "../context/BasketContext";
import {
  Box,
  Card,
  CardBody,
  Container,
  Heading,
  Image,
  Text,
  VStack,
  HStack,
  Button,
  ButtonGroup,
  Grid,
  GridItem,
  Divider,
  CardFooter,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import BasketFooter from "../pages/basketFooter/BasketFooter";
import { LikedContext } from "../context/LikedContext";
import { DeleteIcon } from "@chakra-ui/icons";
const Liked = () => {
  const { liked, setLiked } = useContext(LikedContext);
  const handleRemove = (id) => {
    const arr = liked.filter((item) => item.id !== id);
    setLiked(arr);
  };
  return (
    <Container maxW={"1280px"}>
      <Grid  templateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(2,1fr)",
          lg: "repeat(3,1fr)",
          xl: "repeat(4,1fr)",
        }} gap={6}>
        {liked.length === 0 && (
          <Heading textAlign={"center"}>Корзина пуста</Heading>
        )}
        {liked.map((item, index) => (
          <GridItem
            key={index}
     
            gap={"50px"}
        
            alignItems={"center"}
            m={5}
            py={5}
          >
            <Card>
              <CardBody>
                <Image
                  src={item.thumbnail}
                  width={"300px"}
                  height={"auto"}
                  objec-fit={"cover"}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Text>{item.title}</Text>
                  <Text color="blue.600" fontSize="2xl">
                   $ {item.price}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button
                    variant="solid"
                    colorScheme="blue"
                    onClick={() => handleRemove(item.id)}
                    background={"white"}
                  >
                     <DeleteIcon color={"red"} fontSize={20} />
                  </Button>
                  <Button variant="ghost" colorScheme="blue">
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};

export default Liked;
{
  /* <Box>
<Image
  src={item.thumbnail}
  width={"300px"}
  height={"auto"}
  objec-fit={"cover"}
/>
</Box>{" "}
<CardBody>
<Box>
  <Heading>{item.title}</Heading>
  <Text className="product-card__description" pt={3}>
    {item.description}
  </Text>
  <Heading size={"md"} pt={3}>
    ${item.price}
  </Heading>
</Box>
</CardBody>
<Divider />
<HStack>
  <Button
    onClick={() => handleRemove(item.id)}
    background={"white"}
  >
      <DeleteIcon color={"red"} fontSize={20} />
  </Button>
  <Button className="btn-primary">kupit</Button>
</HStack> */
}

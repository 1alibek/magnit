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
} from "@chakra-ui/react";
import BasketFooter from "../pages/basketFooter/BasketFooter";
import { DeleteIcon } from "@chakra-ui/icons";
const Basket = () => {
  const { basket, setBasket } = useContext(BasketContext);
  const handleRemove = (id) => {
    const arr = basket.filter((item) => item.id !== id);
    setBasket(arr);
  };
  const [cart,setCart]=useState()
  const [cart1,setCart1]=useState()
  const [counter1, setCounter1] = useState(1);
  const handleIncrement =()=>{
    setCounter1(counter1 + 1);
    setCart(cart+1)
  }
  const handleDicrement =()=>{
    if (counter1 == 1) {
      return;
    } else {
      setCounter1(counter1 - 1);
    setCart1(cart1-1)
  }
}

  return (
    <Container maxW={"1400px"} border={"1px solid gray"} borderRadius={"10px"}>
      <Box>
        <Heading p={"10px "} size={"2xl"}>
          {basket.length === 0 && (
            <Heading textAlign={"center"}>Корзина пуста</Heading>
          )}
        </Heading>

        {basket.map((item, index) => (
          <Box
            key={index}
            display={{md:'block',lg:'flex',xl:'flex'}}
            gap={"50px"}
            justifyContent={"start"}
            alignItems={"center"}
            m={5}
            py={5}
            borderBottom={"1px solid gray"}
          >
            <Box>
              <Image
                src={item.images[0]}
                width={"300px"}
                height={"auto"}
                objec-fit={"cover"}
              />
            </Box>
            <Box>
              <Heading size={"lg"}>{item.title}</Heading>
              <Text className="product-card__description" pt={3}>
                {item.description}
              </Text>
              <Heading size={"sm"} pt={3}>
                ${item.price}
              </Heading>
              <Button
                onClick={() => handleRemove(item.id)}
                background={"white"}
              >
                <DeleteIcon color={"red"} fontSize={20} />
              </Button>
            </Box>
            <Box display={"flex"} gap={"50px"} alignItems={"center"} pt={10}>
              <Container
                border={"1px solid black"}
                display={"flex"}
                gap={"20px"}
                alignItems={"center"}
                borderRadius={"5px"}
              >
                <Button onClick={()=>handleIncrement(item.id)}
                  border={"none"}
                  background={"white"}
                  color={"gray"}
                  fontSize={16}
                >
                  +
                </Button>
     <Text>{counter1}</Text>
                <Button onClick={()=>handleDicrement(item.id)}
                  border={"none"}
                  background={"white"}
                  color={"gray"}
                  fontSize={16}
                >
                  -
                </Button>
              </Container>{" "}
            
            </Box>

          </Box>
        ))}
        <BasketFooter />
      </Box>
    </Container>
  );
};

export default Basket;

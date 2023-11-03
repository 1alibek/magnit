import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Container,
  HStack,
  Heading,
  Input,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  Text,
  useNumberInput,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { sofaService } from "../../service/sofaService";
import { ArrowForwardIcon, EmailIcon } from "@chakra-ui/icons";
function Product() {
  const [state, setState] = useState({});
  const { id } = useParams();
  useEffect(() => {
    let data = sofaService.getOneProduct(id);
    data.then((res) => setState(res));
  }, [id]);

  return (
    <Container maxW="1300px" px="20px">
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <img
          src={state.thumbnail}
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
        />
        <Stack>
          <CardBody>
            <Heading color={"#473e66"}>{state.title}</Heading>
            <Text color={"#473e66"}>{state.description}</Text>
            <Text color={"#473e67"} as={"b"}>
              ${state.price}
            </Text>
            <Slider
              aria-label="slider-ex-2"
              colorScheme="teal"
              defaultValue={30}
            >
              <SliderTrack>
                <SliderFilledTrack/>
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </CardBody>
          <CardFooter>
            <Stack direction="row" spacing={4}>
              <Button
                leftIcon={<EmailIcon />}
                colorScheme="teal"
                variant="solid"
              >
                Email
              </Button>
              <Button
                rightIcon={<ArrowForwardIcon />}
                colorScheme="teal"
                variant="outline"
              >
                Call us
              </Button>
            </Stack>
          </CardFooter>
        </Stack>
      </Card>
    </Container>
  );
}

export default Product;
{
  /* <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>The perfect latte</Heading>

      <Text py='2'>
        Caffè latte is a coffee beverage of Italian origin made with espresso
        and steamed milk.
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Buy Latte
      </Button>
    </CardFooter>
  </Stack>
</Card> */
}

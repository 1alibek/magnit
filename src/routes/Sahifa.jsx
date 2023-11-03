import { Box, Button, Center, Container, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { Images } from "styled-icons/bootstrap";

function Sahifa() {
  return (
    <Container maxW={'1300px'} mt={180} >
      <Center>
      <HStack gap={10}>
        <Heading Size={"xl"}>Ой! Мы не можем <br/>найти эту страницу.</Heading>
        <VStack>
        <Text fontSize={"xl"}>
          Почему бы не ознакомитьсяс <br/> нашими популярными продуктами и <br/> выгодными
          рассрочками.
        </Text>
      
        <Link to={"/"}>
          <Button colorScheme="teal" variant="outline">
             домашнюю страницу
          </Button>
        </Link>
        </VStack>
        </HStack>
        </Center>
    </Container>
  );
}

export default Sahifa;

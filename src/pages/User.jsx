import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  Container,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

function User() {
  return (
    <Box>
      <Container maxW={"420px"}>
        <Stack>
          <VStack as={"header"} spacing="6" mt={8}>
            <Heading as={"h1"} fontSize={24}>
              Create Accaount
            </Heading>
          </VStack>
          <Card bg={"#f6f8fa"} variant={"outline"}>
            <CardBody>
              <form>
                <Stack spacing={"4"}>
                  <FormControl>
                    <FormLabel>Username or email address </FormLabel>
                    <Input
                      type="text"
                      bg={"white"}
                      borderColor={"#d8dee4"}
                      size={"sm"}
                      borderRadius={"6px"}
                    />
                  </FormControl>
                  <FormControl>
                    <HStack justify={"space-between"}>
                      <FormLabel size={"sm"}>Pasword</FormLabel>
                      <Button
                        as={"a"}
                        href="#"
                        variant={"link"}
                        size={"xs"}
                        color={"#0969da"}
                      >
                        Forgot pasword
                      </Button>
                    </HStack>
                    <Input
                      type="password"
                      bg={"white"}
                      borderColor={"#d8dee4"}
                      size={"sm"}
                      borderRadius={"6px"}
                    />
                  </FormControl>
                  <Button
                    bg={"#2da44e"}
                    color={"white"}
                    size={"sm"}
                    _hover={{ bg: "2c974b" }}
                    _active={{ bg: "298e46" }}
                  >
                    Sign in
                  </Button>
                </Stack>
              </form>
            </CardBody>
          </Card>
          <Card variant={"outline"} borderColor={"d0d7de"}>
            <CardBody>
              <Center>
                <HStack fontSize={"sm"} spacing={"1"}>
                  <Text>New to</Text>
                  <Link isExternal color={"#0969da"}>
                    Create an account
                  </Link>
                </HStack>
              </Center>
            </CardBody>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
}

export default User;

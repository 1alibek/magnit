import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Input,
  Button,
  Heading,
  Container,
  Text,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const Login = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [email, setEmail] = useState("");
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  async function login() {
    try {
      await axios
        .post("http://localhost:5000/auth/login", {
          username: email,
          password,
        })
        .then((result) => {
          if (result.status === 200) {
            localStorage.setItem("token", JSON.stringify(result.data.token));
            setIsAuth(true);
            navigate("/");
          }
        });
    } catch (error) {
      setErrorMsg(error.response.data.message);
    }
  }

  const onLogin = () => {
    if (email.length > 3 && password.length > 3) {
      login();
    } else {
      setErrorMsg("input ichiga 3 tadan kop malumot yozing");
    }
  };

  return (
    <Container
      maxW={"1300px"}
      mx={"auto"}
      display={"flex"}
      justifyContent={"center"}
    >
      <Box width={"500px"}>
        <Heading textAlign={"center"} mb={3}>
          login
        </Heading>
        <Input
          my={"10px"}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <InputGroup size={"md"}>
          <Input
            type={show ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
          <InputRightElement width="4.5rem">
            <Button onClick={handleClick} background={'white'}w={'20px'}h={'30px'}>
              {" "}
              {show ? <ViewOffIcon /> : <ViewIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Text as={"b"} color={"red"}>
          {errorMsg}
        </Text>
        <Button
          my={"10px"}
          onClick={onLogin}
          colorScheme="twitter"
          background={"#1bc5bd"}
          color={"white"}
          width={"100%"}
        >
          login
        </Button>

      </Box>
    </Container>
  );
};

export default Login;
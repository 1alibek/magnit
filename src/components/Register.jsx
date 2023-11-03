import {
    Box,
    Button,
    Container,
    Heading,
    Input,
    InputGroup,
    InputRightElement,
    Text,
  } from "@chakra-ui/react";
  import { ViewIcon,ViewOffIcon } from "@chakra-ui/icons";
  import axios from "axios";
  import React, { useState } from "react";
  import { Link, useNavigate } from "react-router-dom";
  const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);
  
    const navigate = useNavigate();
    async function register() {
  
      try {
        await axios
          .post("http://localhost:5000/auth/register", {
            username: email,
            password,
          })
          .then((result) => {
            if (result.status === 200) {
              navigate("/login");
            }
          });
      } catch (e) {
        setErrorMsg(e.response.data.message);
      }
    }
  
    const onRegister = () => {
      register();
    };
  
    return (
      <Container
        maxW={"1300px"}
        mx={"auto"}
        display={"flex"}
        justifyContent={"center"}
      >
        <Box width={"500px"} gap={10}>
          <Heading textAlign={"center"} mb={3}>
            Register
          </Heading>
          <Input onChange={(e) => setEmail(e.target.value)} placeholder="email" />
       
          <InputGroup size={"md"}>
            <Input
              type={show ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
            />
            <InputRightElement width="4.5rem">
              <Button onClick={handleClick}background={'white'}w={'20px'}h={'30px'}>
                {" "}
                {show ? <ViewOffIcon /> : <ViewIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button
            onClick={onRegister}
            variant={"outline"}
            width={"100%"}
            background={"#606c38"}
            color={"white"}
          >
            Register
          </Button>
          <Text as={"b"} color={"red"}>
            {errorMsg}
          </Text>{" "}
          <br />
          {/* <Link to={"/login"}>Login</Link> */}
        </Box>
      </Container>
    );
  };
  
  export default Register;
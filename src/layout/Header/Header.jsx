import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import Filter from "./filter/Filter";
import { Heart } from "@styled-icons/bootstrap/Heart";
import { Basket } from "@styled-icons/ionicons-sharp/Basket";
import { User } from "@styled-icons/boxicons-regular/User";
import BurgerMenu from "./BurgerMenu";
import { useContext } from "react";
import { BasketContext } from "../../context/BasketContext";
import Example from "./filter/Example";
import { Menu4 } from "styled-icons/icomoon";
import { AuthContext } from "../../context/AuthContext";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { LikedContext } from "../../context/LikedContext";
const Header = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const check = () => {
    if (isAuth) {
      localStorage.removeItem("token");
      setIsAuth(false);
    }
  };
  const { basket } = useContext(BasketContext);
  const { liked } = useContext(LikedContext);
  return (
    <Container
      display={"flex"}
      gap={"40px"}
      alignItems={"center"}
      maxW={"1300px"}
      p={"20px"}
      justifyContent={"space-between"}
    >
      <Box display={"flex"} alignItems={"center"}>
        <BurgerMenu />
        <Box>
          <Link to={"/"}>
            <Heading color={"#606c38"} size={"lg"}>
              Magnit
            </Heading>
          </Link>
        </Box>
      </Box>
      <Box width={"100%"} display={{ base: "none", sm: "block" }}>
        <Filter />
      </Box>
      <HStack spacing={"20px"} display={{ base: "none", md: "flex ", xl: "flex" }}>
        <Link to="/like" style={{ position: "relative" }}>
          <Text
            width={"25px"}
            height={"25px"}
            position={"absolute"}
            top={"-22px"}
            left={"10px"}
            background={"red"}
            color={"#fff"}
            textAlign={"center"}
            borderRadius={100}
          >
            {liked.length}
          
          </Text>
          <Tooltip
            label="wish-list"
            hasArrow
            color="#white"
            background={"#606c38"}
          >
            <Heart width={20} height={20} color="#606c38" />
          </Tooltip>
        </Link>
        <Link to="/basket" style={{ position: "relative" }}>
          <Text
            width={"25px"}
            height={"25px"}
            position={"absolute"}
            top={"-20px"}
            left={"10px"}
            background={"red"}
            color={"#fff"}
            textAlign={"center"}
            borderRadius={100}
          >
            {basket.length}
          </Text>
          <Tooltip
            label="basket"
            hasArrow
            color="#white"
            background={"#606c38"}
          >
            <Basket width={25} height={25} position={""} color="#606c38" />
          </Tooltip>
        </Link>
        <Menu>
          <MenuButton as={Button} colorScheme={"white"}>
            <Tooltip label="profile" hasArrow background={"#606c38"}>
              <User width={25} height={25} color={"#606c38"} />
            </Tooltip>
          </MenuButton>
          <MenuList>
            <MenuGroup>
              <MenuItem>
                <Button onClick={check} background={'white'}color='red'><ExternalLinkIcon />{isAuth ? "Войти" : "login"}</Button>
              </MenuItem>
            </MenuGroup>
            <MenuDivider />
          </MenuList>
        </Menu>
      </HStack>
        <Example />
    </Container>
  );
};

export default Header;

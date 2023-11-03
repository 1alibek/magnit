import { Box, Button, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useContext, useState } from "react";
// import FilterBar from "./FilterBar";
import { Searchcontext } from "../../../context/SearchContext";
import { Link } from "react-router-dom";
const Filter = () => {
  const {  search, setInputData } = useContext(Searchcontext)
  return (
    <Box display={'flex'} alignItems={'center'}  >
      {/* <InputGroup  border={"#606c38"} >
        <InputLeftElement>
          <SearchIcon color={"#606c38"} />
        </InputLeftElement>
        <Input variant='filled' placeholder='Поиск каталого'maxW={'1280px'} onChange={(e) => setInputData(e.target.value)} />
        <Button>add</Button>
        
      </InputGroup> */}
      <Input
        placeholder="поиск продукта"
        width={"100%"}
        onChange={(e) => setInputData(e.target.value)}
      />
      <Link to={'/search'}>
      <Button
        background={"#606c38"}
        colorScheme="twitter"
        w={"50px"}
        h={"40px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        borderRadius={5}
        onClick={search}
      >
        <SearchIcon color={"white"} />
      </Button>
        </Link>
    </Box>
  );
};

export default Filter;

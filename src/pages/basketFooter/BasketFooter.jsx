import { CheckIcon, PhoneIcon } from '@chakra-ui/icons'
import { Box, Container, HStack, Input, InputGroup, InputLeftElement, InputRightElement, Stack, VStack } from '@chakra-ui/react'
import React from 'react'

function BasketFooter() {
  return (
   <Box>
    <Container maxW={'1280px'}>
    <HStack spacing={4} m={5} >
  <InputGroup w={'100%'} >
    <InputLeftElement pointerEvents='none'>
      <PhoneIcon color='gray.300' />
    </InputLeftElement>
    <Input type='tel' placeholder='Phone number' />
  </InputGroup>

  <InputGroup w={'100%'}>
    <InputLeftElement
      pointerEvents='none'
      color='gray.300'
      fontSize='1.2em'
      children='$'
    />
    <Input placeholder='Enter amount' />
    <InputRightElement>
      <CheckIcon color='green.500' />
    </InputRightElement>
  </InputGroup>
</HStack>
    </Container>
   </Box>
  )
}

export default BasketFooter
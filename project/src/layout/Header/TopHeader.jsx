import {
  Box,
  Container,
  Link as ChakraLink,
  Image,
  Text,
} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import telIcon from '../../assets/icons/phone.svg'
import deliveryIcon from '../../assets/icons/delivery-icon.svg'
import BurgerMenu from './BurgerMenu'

const TopHeader = () => {
  return (
    <Box
      w={'100%'}
      bg={'var(--primary-color)'}
      h={'40px'}
      color={'white'}
      display={{ base: 'none', md: 'block' }}
    >
      <Container
        maxW={'1300px'}
        px={'20px'}
        height={'100%'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Box as='nav' display={'flex'} gap={'30px'}>
          <Link to={'/'}>Главная</Link>
          <Link to={'/about'}>О нас</Link>
          <Link to={'/contact'}>Контакты</Link>
        </Box>
        <Box display={'flex'} gap={'40px'}>
          <ChakraLink
            display={'flex'}
            alignItems={'center'}
            gap={'12px'}
            href='tel:+9989188888888'
          >
            <Image src={telIcon} />
            <Text as={'span'}>8 (964) 89 99 119</Text>
          </ChakraLink>
          <ChakraLink display={'flex'} alignItems={'center'} gap={'12px'}>
            <Image src={deliveryIcon} />
            <Text as={'span'}>Доставка</Text>
          </ChakraLink>
        </Box>
      </Container>
    </Box>
  )
}

export default TopHeader

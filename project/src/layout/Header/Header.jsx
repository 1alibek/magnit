import { Box, Container, HStack, Image } from '@chakra-ui/react'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import Filter from './Filter'
import { ReactComponent as LikeIcon } from '../../assets/icons/wishlist-icon.svg'
import { ReactComponent as BasketIcon } from '../../assets/icons/bag.svg'
import { ReactComponent as ProfileIcon } from '../../assets/icons/profile-icon.svg'
import BurgerMenu from './BurgerMenu'

const Header = () => {
  return (
    <Container
      display={'flex'}
      gap={'40px'}
      alignItems={'center'}
      maxW={'1300px'}
      p={'20px'}
      justifyContent={'space-between'}
    >
      <Box display={'flex'} alignItems={'center'}>
        <BurgerMenu />
        <Link to={'/'}>
          <Image src={logo} height={25} />
        </Link>
      </Box>
      <Box width={'100%'} display={{ base: 'none', sm: 'block' }}>
        <Filter />
      </Box>
      <HStack spacing={'20px'}>
        <Link to='/'>
          <LikeIcon height={25} width={25} />
        </Link>
        <Link to='/'>
          <BasketIcon height={25} width={25} />
        </Link>
        <Link to='/'>
          <ProfileIcon height={25} width={25} />
        </Link>
      </HStack>
    </Container>
  )
}

export default Header

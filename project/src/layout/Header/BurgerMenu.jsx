import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  useDisclosure,
  Box,
} from '@chakra-ui/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'

function BurgerMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = useState('left')

  return (
    <>
      <Box
        onClick={onOpen}
        mr={'10px'}
        display={{ base: 'inline-block', md: 'none' }}
      >
        <HamburgerIcon fontSize={'32px'} />
      </Box>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <CloseIcon onClick={onClose} />

            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О нас</Link>
            <Link to={'/contact'}>Контакты</Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default BurgerMenu

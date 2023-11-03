import React from 'react'
import { Outlet } from 'react-router-dom'
import TopHeader from './Header/TopHeader'
import Header from './Header/Header'
import { Box, Container } from '@chakra-ui/react'
import Filter from './Header/Filter'

const Layout = () => {
  return (
    <>
      <header>
        <TopHeader />
        <Header />
        <Container p={'10px 20px'} display={{ base: 'block', sm: 'none' }}>
          <Filter />
        </Container>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </>
  )
}

export default Layout

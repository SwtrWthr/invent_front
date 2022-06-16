import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { Menu } from '@components/Menu/Menu'
import { Header } from '@components/Header/Header'

interface Props {
  pageTitle?: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children, pageTitle }) => {
  return (
    <Flex minH="100vh">
      <Menu flexShrink={0} as="aside" />
      <Flex flexDir="column" flexGrow={1}>
        <Header />
        {pageTitle}
        <Flex
          px={8}
          py={12}
          as="main"
          flexGrow={1}
          flexDir="column"
          justifyContent="stretch"
          bgColor="background"
        >
          {children}
        </Flex>
      </Flex>
    </Flex>
  )
}

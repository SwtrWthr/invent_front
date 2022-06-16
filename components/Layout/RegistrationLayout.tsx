import React from 'react'
import { GetLayout } from '../../pages/type'
import { Flex } from '@chakra-ui/react'

export const RegistrationLayout: GetLayout = (page) =>  (
  <Flex justifyContent="center" h="100vh" bg="main">
    {page}
  </Flex>
);
import React from 'react'
import {
  Button,
  Circle,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { LayoutFC } from '../type'
import { RegistrationLayout } from '@components/Layout/RegistrationLayout'

export const RegistrationPage: LayoutFC = () => {
  return (
    <Flex w="552px" layerStyle="base" h="full" p={14} flexDir="column" alignItems="center">
      <HStack>
        <Circle size="50px" bg="main" color="white" fontSize="lg">G</Circle>
        <Text color="main" fontSize="26px">
          Invent
        </Text>
      </HStack>

      <Text mt={4} mb={6} color="text" variant="heading">
        Авторизация
      </Text>
      <Flex as="form" flexDir="column" w="full">
        <VStack alignItems="stretch" w="full">
          <FormControl pos="relative">
            <FormLabel>ФИО*</FormLabel>
            <Input placeholder="Туйгунов Саид" w="full" />
            <FormErrorMessage pos="absolute" top="full" left={0}>
              This field is required.
            </FormErrorMessage>
          </FormControl>

          <FormControl pos="relative">
            <FormLabel>Email ID*</FormLabel>
            <Input placeholder="yourmail@gmail.com" w="full" />
            <FormErrorMessage pos="absolute" top="full" left={0}>
              This field is required.
            </FormErrorMessage>
          </FormControl>

          <FormControl pos="relative">
            <FormLabel>Пароль*</FormLabel>
            <Input type="password" />
            <FormErrorMessage pos="absolute" top="full" left={0}>
              This field is required.
            </FormErrorMessage>
          </FormControl>
        </VStack>
        <VStack alignSelf="center">
          <Button mt="96px" w="246px">
            Войти
          </Button>
          <Flex fontSize="15px">
            <Text color="secondary" mr={1}>
              Вы уже зарегестрированы?
            </Text>
            <NextLink href="/login">
              <Link>
                <Text color="main">Войти</Text>
              </Link>
            </NextLink>
          </Flex>
        </VStack>
      </Flex>
    </Flex>
  )
}

RegistrationPage.getLayout = RegistrationLayout

export default RegistrationPage

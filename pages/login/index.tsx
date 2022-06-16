import React from 'react'
import {
  Box,
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
import { LayoutFC } from '../type'
import NextLink from 'next/link'
import { RegistrationLayout } from '@components/Layout/RegistrationLayout'
import { useRouter } from 'next/router'

interface Props {
  email: string
  password: string
}

const LoginPage: LayoutFC = () => {
  const router = useRouter();

  return (
    <Flex w="552px" layerStyle="base" h="full" p={14} flexDir="column" alignItems="center">
      <HStack>
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
          <Button mt="96px" w="246px" onClick={() => router.push("/products")}>
            Войти
          </Button>
          {/*<Flex fontSize="15px">*/}
          {/*  <Text color="secondary" mr={1}>*/}
          {/*    У вас нет аккаунта?*/}
          {/*  </Text>*/}
          {/*  <NextLink href="/registration">*/}
          {/*    <Link>*/}
          {/*      <Text color="main">Регистрация</Text>*/}
          {/*    </Link>*/}
          {/*  </NextLink>*/}
          {/*</Flex>*/}
        </VStack>
      </Flex>
    </Flex>
  )
}

LoginPage.getLayout = RegistrationLayout

export default LoginPage

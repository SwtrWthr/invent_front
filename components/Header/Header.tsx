import React from 'react'
import {
  Avatar,
  Flex,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  LinkBox,
  Text,
} from '@chakra-ui/react'
import { AiOutlineSearch } from 'react-icons/ai'
import { colors } from '@theme/colors'
import { IoIosMail } from 'react-icons/io'
import { MdNotifications } from 'react-icons/md'
import { GiHamburgerMenu } from 'react-icons/gi'
import NextLink from 'next/link'

export const Header: React.FC = () => {
  return (
    <Flex as="header" p={8} h="100px">
      {/*<InputGroup maxW="354px" bgColor="background">*/}
      {/*  <InputLeftElement>*/}
      {/*    <AiOutlineSearch color={colors.placeholder} />{' '}*/}
      {/*  </InputLeftElement>*/}
      {/*  <Input placeholder="Поиск..." />*/}
      {/*</InputGroup>*/}
      <Flex ml="auto" alignItems="center">
        {/*<HStack spacing={3}>*/}
        {/*  <IconButton*/}
        {/*    variant="ghost"*/}
        {/*    aria-label="mail"*/}
        {/*    icon={<IoIosMail fill={colors.placeholder} />}*/}
        {/*  />*/}
        {/*  <IconButton*/}
        {/*    variant="ghost"*/}
        {/*    aria-label="mail"*/}
        {/*    icon={<MdNotifications fill={colors.placeholder} />}*/}
        {/*  />*/}
        {/*</HStack>*/}
        <NextLink href="/account">
          <Link textDecoration="none !important" as={Flex} alignItems="center">
            <Avatar ml={8} name="George Martin" />
            <Text ml={3} mr={5} color="text-secondary">
              Аяжан Нагибулла
            </Text>
          </Link>
        </NextLink>
      </Flex>
    </Flex>
  )
}

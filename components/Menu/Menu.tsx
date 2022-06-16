import React from 'react'
import {
  Box,
  Circle,
  Flex,
  FlexProps,
  Link,
  ListItem,
  StackDivider,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react'
import { CompanyIcon } from '@components/Icons'
import { menuList } from '@components/Menu/MenuList'
import NextLink from 'next/link'

export const Menu: React.FC<FlexProps> = (props) => {
  return (
    <Flex boxShadow="0px 0px 30px rgba(0, 0, 0, 0.08)" w="322px" {...props} flexDirection="column">
      <Flex p={6} h="100px" bgColor="main" alignItems="center">
        <Text ml={2} mr="auto" lineHeight="32px" fontSize="26px" color="white" m={3}>
          inVENT
        </Text>
      </Flex>

      <VStack
        h="full"
        layerStyle="base"
        spacing={6}
        alignItems="stretch"
        divider={<StackDivider color="secondary" />}
      >
        {menuList.map((item, i) => (
          <Box key={i}>
            <Text pl={10} pt={10} variant="small" color="secondary">
              {item.caption}
            </Text>
            <UnorderedList styleType="none" m={0}>
              {item.list.map((listItem, i) => (
                <ListItem
                  key={i}
                  pl={10}
                  h="59px"
                  display="flex"
                  alignItems="center"
                  _hover={{ bgColor: 'main-transparent', color: 'main' }}
                >
                  <NextLink href={listItem[1]}>
                    <Link>
                      <Text as="span" color="text-secondary">
                        {listItem[0]}
                      </Text>
                    </Link>
                  </NextLink>
                </ListItem>
              ))}
            </UnorderedList>
          </Box>
        ))}
        <Flex pl={10} alignItems="center">
          <svg width={17} height={14} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.385 4.175a.446.446 0 0 1-.381.015c-.12-.053-.196-.155-.196-.266v-2.04c0-.102.062-.196.165-.251L7.801.102a.444.444 0 0 1 .412 0l2.828 1.53c.103.056.165.15.165.251v2.04c0 .112-.075.214-.196.267a.446.446 0 0 1-.381-.015L9.32 3.467V7.75c0 .588-.59 1.067-1.314 1.067-.724 0-1.314-.479-1.314-1.067V3.467l-1.308.708Zm9.107-.841c.996 1.114 1.522 2.433 1.522 3.813 0 3.584-3.592 6.5-8.007 6.5-4.415 0-8.007-2.916-8.007-6.5 0-1.38.526-2.699 1.522-3.813.114-.128.33-.163.496-.08l2.091 1.047a.31.31 0 0 1 .17.198.258.258 0 0 1-.064.236c-.582.65-.89 1.422-.89 2.229 0 2.096 2.1 3.8 4.682 3.8 2.582 0 4.682-1.704 4.682-3.8 0-.807-.308-1.578-.89-2.23a.259.259 0 0 1-.063-.235.31.31 0 0 1 .169-.198l2.091-1.047c.166-.083.382-.048.496.08Z"
              fill="#AAA"
            />
          </svg>
          <NextLink href="/login">
            <Link>
              <Text ml={2} color="text-secondary">
                Выйти
              </Text>
            </Link>
          </NextLink>
        </Flex>
      </VStack>
    </Flex>
  )
}

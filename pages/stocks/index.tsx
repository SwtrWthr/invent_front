import React from 'react'
import { Layout } from '@components/Layout'
import { PageTitle } from '@components/PageTitle'
import {
  Flex,
  Input,
  Spacer,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  VStack,
} from '@chakra-ui/react'
import { AddStock } from '@components/Stock'
import { stockApi } from '../../api/stock-api'
import { Stock } from '../../models/stock'
import { Pagination } from '../../models/pagination'
import { Stocks } from '@components/Stocks'

export async function getServerSideProps() {
  return {
    props: await stockApi.get(),
  }
}

export const StocksPage: React.FC<Pagination<Stock>> = ({ results }) => {
  return (
    <Layout pageTitle={<PageTitle breadcrumbs={['Главная', 'Склады']}>Склады</PageTitle>}>
      <Flex>
        <Spacer />
        <AddStock addStock={item => results.push(item)}/>
      </Flex>
      <VStack mt={4} layerStyle="base" p={7} alignItems="stretch" spacing={8}>
        <Text variant="heading">Все склады</Text>
        <Flex>
          <Input maxW="216px" ml="auto" type="search" placeholder="Поиск" />
        </Flex>
        <Stocks stocks={results} />
      </VStack>
    </Layout>
  )
}

export default StocksPage

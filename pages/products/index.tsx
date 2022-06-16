import React, { useCallback } from 'react'
import { Layout } from '@components/Layout'
import { PageTitle } from '@components/PageTitle'
import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
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
import { FormField } from '@components/FormField'
import { useForm } from 'react-hook-form'
import { Item, ItemCreate } from '../../models/item'
import { itemApi } from '../../api/item-api'
import { useRouter } from 'next/router'
import { stockApi } from '../../api/stock-api'
import { categoryApi } from '../../api/category-api'
import { Pagination, Results } from '../../models/pagination'
import { Category } from '../../models/category'
import { Stock } from '../../models/stock'
import { Products } from '@components/Products'

export async function getServerSideProps() {
  return {
    props: await itemApi.get(),
  }
}

export const ProductsPage: React.FC<Pagination<Item>> = ({ results }) => {
  const router = useRouter()

  return (
    <Layout pageTitle={<PageTitle breadcrumbs={['Главная', 'Товары']}>Товары</PageTitle>}>
      <Flex px={6}>
        <Input placeholder="Поиск... " maxW="263px" variant="unstyled" />
        <Button ml="auto" variant="add" onClick={() => router.push('/products/add')}>
          Добавить товар
        </Button>
      </Flex>
      <Products items={results} />
    </Layout>
  )
}

export default ProductsPage

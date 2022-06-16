import React from 'react'
import { Layout } from '@components/Layout'
import { PageTitle } from '@components/PageTitle'
import {
  background,
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
import { AddCategory } from '@components/Category'
import { categoryApi } from '../../api/category-api'
import { Pagination, Results } from '../../models/pagination'
import { Category } from '../../models/category'

export async function getServerSideProps() {
  return {
    props: {
      results: await categoryApi.get(),
    },
  }
}

export const CategoriesPage: React.FC<Results<Category>> = ({ results }) => {
  return (
    <Layout pageTitle={<PageTitle breadcrumbs={['Главная', 'Категории']}>Категории</PageTitle>}>
      <Flex>
        <Spacer />
        <AddCategory />
      </Flex>
      <VStack mt={4} layerStyle="base" p={7} alignItems="stretch" spacing={8}>
        <Text variant="heading">Все склады</Text>
        <Flex>
          <Input maxW="216px" ml="auto" type="search" placeholder="Поиск" />
        </Flex>
        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Дата создания</Th>
                <Th>Название</Th>
                <Th>Описание</Th>
              </Tr>
            </Thead>
            <Tbody>
              {results.map((c) => (
                <Tr key={c.id} _odd={{ bg: '#fafafa' }}>
                  <Td>{c.id}</Td>
                  <Td>{new Date(c.created_at).toLocaleDateString()}</Td>
                  <Td>{c.title}</Td>
                  <Td>{c.description}</Td>
                </Tr>
              ))}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>Id</Th>
                <Th>Дата создания</Th>
                <Th>Название</Th>
                <Th>Описание</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </VStack>
    </Layout>
  )
}

export default CategoriesPage

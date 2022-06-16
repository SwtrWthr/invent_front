import React from 'react'
import { Item } from '../../models/item'
import { Link, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import { useRouter } from 'next/router'

interface Props {
  items: Item[]
}

export const Products: React.FC<Props> = ({ items }) => {
  const router = useRouter()

  return (
    <TableContainer>
      <Table
        variant="unstyled"
        sx={{
          borderCollapse: 'separate',
          borderSpacing: '0px 15px',
        }}
      >
        <Thead>
          <Tr>
            <Th>Штрих код</Th>
            <Th maxW={'100'}>Наименование</Th>
            <Th>Категория</Th>
            <Th>Цена</Th>
            <Th>Описание</Th>
            <Th>Количество</Th>
            <Th>Дата добавления</Th>
          </Tr>
        </Thead>
        <Tbody>
          {items.map((item) => (
            <Tr key={item.id} bg="white">
              <Td>{item.sku}</Td>
              <Td maxW={200}>
                <Link href={`products/${item.id}`}>
                  <Text noOfLines={1} fontWeight={'semibold'}>
                    {item.title}
                  </Text>
                </Link>
              </Td>
              <Td>{item.category.map((c) => c.title).join('/')}</Td>
              <Td>{item.rec_price} ₸</Td>
              <Td maxW="100px">
                <Text isTruncated fontWeight="normal">
                  {item.description}
                </Text>
              </Td>
              <Td>{item.availability}</Td>
              <Td>{new Date(item.received_at).toLocaleDateString()}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

import React from 'react'
import { Stock } from '../../models/stock'
import { Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'

interface Props {
  stocks: Stock[]
}

export const Stocks: React.FC<Props> = ({ stocks }) => {
  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th>Id</Th>
            <Th>Дата создания</Th>
            <Th>Active</Th>
            <Th>Название</Th>
            <Th>Описание</Th>
            <Th>Вместимость</Th>
          </Tr>
        </Thead>
        <Tbody>
          {stocks.map((stock) => (
            <Tr key={stock.id} _odd={{ bg: '#fafafa' }}>
              <Td>{stock.id}</Td>
              <Td>{new Date(stock.created_at).toLocaleDateString()}</Td>
              <Td>{stock.is_active ? 'Да' : 'Нет'}</Td>
              <Td>{stock.title}</Td>
              <Td>{stock.description}</Td>
              <Td>{stock.capacity}</Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Id</Th>
            <Th>Дата создания</Th>
            <Th>Active</Th>
            <Th>Название</Th>
            <Th>Описание</Th>
            <Th>Вместимость</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  )
}

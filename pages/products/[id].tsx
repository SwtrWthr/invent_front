import React, { useCallback, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { Item, ItemCreate } from '../../models/item'
import { useRouter } from 'next/router'
import { itemApi } from '../../api/item-api'
import { Layout } from '@components/Layout'
import { PageTitle } from '@components/PageTitle'
import {
  Box,
  Button,
  Center, Divider,
  Flex,
  HStack, Image,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  Text,
  VStack,
} from '@chakra-ui/react'
import { Line } from 'recharts'
import ReactToPrint from 'react-to-print'
import QRPrintContent from '@components/Products/QRPrintContent'

export async function getServerSideProps(context: any) {
  const id = context.params.id

  return {
    props: {
      item: await itemApi.detail(id),
    },
  }
}

interface Props {
  item: Item
}

export const AddProductPage: React.FC<Props> = ({ item }) => {
  const { register, handleSubmit } = useForm<ItemCreate>()
  const componentRef = useRef<HTMLDivElement>(null);
  // const onSubmit = useCallback(async (data: ItemCreate) => {
  //   await itemApi.post({
  //     ...data,
  //     category: [Number.parseInt(data.category as unknown as string)],
  //     stock: Number.parseInt(data.stock as unknown as string),
  //     rec_price: Number.parseInt(data.rec_price as unknown as string),
  //     sku: 'none',
  //     code: 'none',
  //     availability: Number.parseInt(data.availability as unknown as string),
  //   })
  //   router.push('/products')
  // }, [])

  return (
    <Layout pageTitle={<PageTitle breadcrumbs={['Главная', 'Товары']}>{item.title}</PageTitle>}>
      <Box as="form">
        <Box layerStyle="base" px={8} py={4}>
          <Text variant="heading">Карточка товара</Text>
          <Text variant="heading" fontSize={'4xl'} mt={5}>
            {item.title}
          </Text>
          <Text fontSize={'xl'} color={'#999'} mt={2} fontWeight={'medium'}>
            {item.description}
          </Text>
          <Divider my={6}/>
          <Box>
            {/*<Flex>*/}
            {/*  <Text mr={1}>Склад: </Text>*/}
            {/*  <Text>{item.stock}</Text>*/}
            {/*</Flex>*/}
            <Flex>
              <Text mr={1} color={'#666'}>Количество на складе: </Text>
              <Text>{item.availability}</Text>
            </Flex>
            <Flex>
              <Text mr={1} color={'#666'}>SKU: </Text>
              <Text>{item.sku}</Text>
            </Flex>
            {item?.attrs && Object.entries(item?.attrs).map(([key, value]) => {
              return (
                <Flex key={`field-${key}`}>
                  <Text mr={1} color={'#666'}>{key}: </Text>
                  <Text>{value}</Text>
                </Flex>
              )
            })}
          </Box>
        </Box>

        <Box mt={8}>
          {item.images.length > 0 && (
            <Box layerStyle="base" py={4} px={8}>
              <Text variant="heading">Фото</Text>
              <Box mt={4}>
                <Flex>
                  {item.images.map(image => (
                    <Box key={image.id} mr={4}>
                      <Image boxSize='200px' src={image.image_url} alt='Dan Abramov' objectFit='cover' />
                    </Box>
                  ))}
                </Flex>
              </Box>
            </Box>
          )}
          <Flex mt={8}>
            <Box layerStyle="base" py={4} px={8}>
              <Text variant="heading">QR</Text>
              <div ref={componentRef}>
                <QRPrintContent src={item.qr_code}/>
              </div>
              <ReactToPrint
                trigger={() => <Button mt={3} w={'100%'}>Print</Button>}
                content={() => componentRef.current}
              />
            </Box>
          </Flex>
        </Box>
      </Box>
    </Layout>
  )
}

export default AddProductPage

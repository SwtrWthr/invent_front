import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { ItemCreate } from '../../../models/item'
import { useRouter } from 'next/router'
import { itemApi } from '../../../api/item-api'
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
  Text,
  VStack,
} from '@chakra-ui/react'
import { FormField } from '@components/FormField'
import { categoryApi } from '../../../api/category-api'
import { stockApi } from '../../../api/stock-api'
import { Category } from '../../../models/category'
import { Pagination } from '../../../models/pagination'
import { Stock } from '../../../models/stock'

export async function getServerSideProps() {
  return {
    props: {
      categories: await categoryApi.get(),
      stocks: await stockApi.get(),
    },
  }
}

interface Props {
  categories: Category[]
  stocks: Pagination<Stock>
}

export const AddProductPage: React.FC<Props> = ({ categories, stocks: { results } }) => {
  const { register, handleSubmit } = useForm<ItemCreate>()
  const router = useRouter()
  const onSubmit = useCallback(async (data: ItemCreate) => {
    await itemApi.post({
      ...data,
      category: [Number.parseInt(data.category as unknown as string)],
      stock: Number.parseInt(data.stock as unknown as string),
      rec_price: Number.parseInt(data.rec_price as unknown as string),
      sku: data.sku,
      code: 'none',
      availability: Number.parseInt(data.availability as unknown as string),
    })
    router.push('/products')
  }, [])

  return (
    <Layout
      pageTitle={
        <PageTitle breadcrumbs={['Главная', 'Товары', 'Добавить товар']}>Добавить товар</PageTitle>
      }
    >
      <Box as="form" onSubmit={handleSubmit(onSubmit)}>
        <Box layerStyle="base" px={8} py={4}>
          <Text variant="heading">Карточка товара</Text>
          <HStack spacing={4} mt={8}>
            <FormField
              label="Название"
              placeholder="Название"
              inputProps={{ ...register('title') }}
            />
            <FormField
              label="Описание"
              placeholder="Введите описание"
              inputProps={{ ...register('description') }}
            />
          </HStack>
        </Box>

        <Flex mt={10}>
          <Box>
            {/*<Box layerStyle="base" py={4} px={8}>*/}
            {/*  <Text variant="heading">Фото</Text>*/}
            {/*  <Box mt={4}>*/}
            {/*    <Center w="431px" border="1px solid #DDDFE1" h="188px">*/}
            {/*      <VStack>*/}
            {/*        <svg width={84} height={53} fill="none" xmlns="http://www.w3.org/2000/svg">*/}
            {/*          <path*/}
            {/*            fillRule="evenodd"*/}
            {/*            clipRule="evenodd"*/}
            {/*            d="M45.873 0c9.91 0 18.611 6.148 21.908 15.383 8.867 1.81 15.22 9.503 15.22 18.596 0 10.458-8.558 18.967-19.082 18.967H52.985c-.74 0-1.339-.597-1.339-1.334 0-.734.599-1.333 1.339-1.333h10.934c9.047 0 16.405-7.313 16.405-16.3 0-8.05-5.794-14.822-13.772-16.107l-.813-.132-.25-.782C62.765 8.408 54.882 2.67 45.878 2.67c-8.727 0-16.524 5.516-19.41 13.732l-.551 1.57-1.417-.875a10.407 10.407 0 0 0-5.46-1.554c-5.734 0-10.4 4.646-10.4 10.36l.066 1.114-.616.609a12.435 12.435 0 0 0-5.414 10.247c0 6.84 5.604 12.401 12.49 12.401l.274.003.058.001c.113.003.229.006.34 0h14.18c.739 0 1.339.598 1.339 1.332 0 .737-.6 1.334-1.34 1.334h-14.11c-.063.005-.143.005-.234.005a10.053 10.053 0 0 1-.279-.002C6.805 52.943 0 46.181 0 37.875c0-4.716 2.217-9.148 5.963-12 .013-7.172 5.876-13 13.078-13 1.89 0 3.752.409 5.462 1.198C28.136 5.593 36.536 0 45.873 0Zm9.612 40.159c-.343 0-.685-.128-.947-.388L42.84 28.122V51.61c0 .737-.599 1.334-1.337 1.334a1.336 1.336 0 0 1-1.34-1.334V28.122L28.467 39.771a1.346 1.346 0 0 1-1.893 0 1.331 1.331 0 0 1 0-1.886l13.982-13.924.002-.003.946-.94.945.94.002.003 13.981 13.925a1.33 1.33 0 0 1-.946 2.273Z"*/}
            {/*            fill="#7F63F4"*/}
            {/*          />*/}
            {/*        </svg>*/}
            {/*        <Text color="secondary">Перетащите файл сюда или нажмите</Text>*/}
            {/*      </VStack>*/}
            {/*    </Center>*/}
            {/*  </Box>*/}
            {/*</Box>*/}
            {/*<Box mt={7} layerStyle="base" py={4} px={8}>*/}
            {/*  <Text variant="heading">Штрихкод</Text>*/}
            {/*  <Text mt={4} variant="caption">*/}
            {/*    QR code товара*/}
            {/*  </Text>*/}
            {/*  <Center mt={4} w="431px" h="188px" border="1px solid #DDDFE1">*/}
            {/*    <Text variant="caption" color="secondary">*/}
            {/*      Здесь выйдет QR code*/}
            {/*    </Text>*/}
            {/*  </Center>*/}
            {/*</Box>*/}
          </Box>
          <Box flexGrow={1}>
            <Box layerStyle="base" py={4} px={8} alignSelf="flex-start">
              <Text variant="heading">Основная информация</Text>
              <VStack mt={5} alignItems="stretch" spacing={4}>
                <Flex alignItems="center">
                  <Box w="344px">
                    <Text variant="caption">Склад</Text>
                  </Box>
                  <Select placeholder="Выберите склад" {...register('stock')}>
                    {results.map((stock) => (
                      <option key={stock.id} value={stock.id}>
                        {stock.title}
                      </option>
                    ))}
                  </Select>
                </Flex>
                <Flex alignItems="center">
                  <Box w="344px">
                    <Text variant="caption">Категория</Text>
                  </Box>
                  <Select placeholder="Выберите категорию" {...register('category')}>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.title}
                      </option>
                    ))}
                  </Select>
                </Flex>
                <Flex alignItems="center">
                  <Box w="344px">
                    <Text variant="caption">Количество</Text>
                  </Box>
                  <Input placeholder="100" type="number" {...register('availability')} />
                </Flex>
                <Flex alignItems="center">
                  <Box w="344px">
                    <Text variant="caption">SKU</Text>
                  </Box>
                  <Input placeholder="sku" type="text" {...register('sku')} />
                </Flex>
                <Flex alignItems="center">
                  <Box w="344px">
                    <Text variant="caption">Цена</Text>
                  </Box>
                  <InputGroup>
                    <InputLeftAddon>₸</InputLeftAddon>
                    <Input type="number" {...register('rec_price')} />
                    <InputRightAddon>.00</InputRightAddon>
                  </InputGroup>
                </Flex>
              </VStack>
            </Box>

            <Flex mt={10}>
              <Flex ml="auto">
                <Button type="submit">Добавить</Button>
                <Button variant="secondary" onClick={() => router.push('/products')}>
                  Отмена
                </Button>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Layout>
  )
}

export default AddProductPage

import React, { useCallback } from 'react'
import {
  Button,
  Checkbox,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import { FormField } from '@components/FormField'
import { useForm } from 'react-hook-form'
import { stockApi } from '../../api/stock-api'
import { Stock, StockCreate } from '../../models/stock'
import { useRouter } from 'next/router'

interface Props {
  addStock(stock: Stock): void
}

export const AddStock = ({ addStock }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { register, handleSubmit } = useForm<StockCreate>()
  const router = useRouter()
  const onSubmit = useCallback((data: StockCreate) => {
    stockApi.post({
      ...data,
      managers: [1],
      type: 1,
      capacity: Number.parseInt(data.capacity as unknown as string),
    }).then(res => {
      console.log(res)
      router.replace(router.asPath)
      // addStock(res)
    })
    onClose()
  }, [])

  return (
    <>
      <Button onClick={onOpen}>Добавить</Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>Добавить склад</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack>
              <FormField label="Название" inputProps={{ ...register('title') }} />
              <FormField label="Описание" inputProps={{ ...register('description') }} />
              <FormField
                label="Вместимость"
                type="number"
                inputProps={{ ...register('capacity') }}
              />
              <Checkbox alignSelf="flex-start" inputProps={{ ...register('is_active') }}>
                Активен
              </Checkbox>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button variant="secondary" mr={3} onClick={onClose}>
              Отмена
            </Button>
            <Button type="submit">Создать</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

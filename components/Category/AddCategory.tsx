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
import { CategoryCreate } from '../../models/category'
import { categoryApi } from '../../api/category-api'
import { useRouter } from 'next/router'

export const AddCategory: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { register, handleSubmit } = useForm<CategoryCreate>()
  const router = useRouter()
  const onSubmit = useCallback((data: CategoryCreate) => {
    categoryApi.post(data).then(res => router.replace(router.asPath))
    onClose();
  }, [])

  return (
    <>
      <Button onClick={onOpen}>Добавить</Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>Добавить категорию</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack>
              <FormField label="Название" inputProps={{ ...register('title') }} />
              <FormField label="Описание" inputProps={{ ...register('description') }} />
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

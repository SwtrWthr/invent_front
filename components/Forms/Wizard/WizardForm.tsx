import React from 'react'
import {
  Box,
  Button,
  Center,
  Circle,
  Flex,
  FlexProps,
  FormControl, FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react'

export const WizardForm: React.FC<FlexProps> = (props) => {
  return (
    <Flex layerStyle="base" h="607px" {...props}>
      <Flex color="white" flexDir="column" bg="main" maxW="392px" flexGrow={1} py={8} px={10}>
        <Flex flexDir="column" alignItems="center" mt={16}>
          <svg width={60} height={60} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24.113 34.702s-.84 2.157-.835 2.167l1.335 1.895h2.945l1.335-1.895c-.01-.035-.835-2.167-.835-2.167-.098.015-3.848.015-3.945 0ZM16.527 22.11c1.72 5.024 4.952 8.844 9.557 8.844 4.435 0 7.718-3.765 9.492-8.782 3.583-3.613 2.738-6.313 1.913-7.603C39.433 5.255 33.487 0 25.747 0 11.875 0 14.295 15.2 14.295 15.2l.045.006c-.635 1.43-.82 3.835 2.188 6.905Zm5.795-11.285-1.015 3.772c4.95-1.51 5.617-2.34 6.397-2.907a18.123 18.123 0 0 0 2.05-1.728c.255.46.578.88.948 1.26.364.385.907-3.493.907-3.493s1.37 2.356 1.56 3.118c.135.54.997 2.725 1.465 2.925-.172 7.213-3.41 14.75-8.55 14.75-4.787 0-7.922-6.537-8.475-13.262 1.315-.08 4.713-4.435 4.713-4.435Zm27.83 16.82c.927 0 1.49-.618 1.49-1.38-.02-.783-.563-1.38-1.45-1.38-.888 0-1.475.597-1.475 1.38-.003.762.56 1.38 1.434 1.38Zm.027 15.822c-6.795 0-12.325-5.528-12.325-12.322 0-.233.055-.45.068-.678l-3.483-1.282-.922 2.25 1.947.717-7.102 23.438-.895-15.738h-2.765l-.885 15.45-7.026-23.182 1.868-.683-.933-2.248-6.895 2.538-.087.038c-.087.042-6.657 3.167-9.535 10.737A20.302 20.302 0 0 0 0 47.689C6.19 55.2 15.568 59.995 26.065 60h.05c.568 0 1.128-.015 1.69-.044h.038c9.792-.503 18.485-5.17 24.332-12.27-.16-1.583-.51-3.003-.947-4.326-.35.03-.688.108-1.048.108Zm-8.412 6.935c-2.883 1.157-5.85 1.363-7.558 1.363-.575 0-1.005-.028-1.248-.043v-1.45c.078.005 4.986.58 8.806-1.387v1.517Zm8.412-29.08c-5.425 0-9.825 4.398-9.825 9.823 0 5.424 4.4 9.822 9.825 9.822 5.425 0 9.82-4.398 9.82-9.822 0-5.425-4.395-9.823-9.82-9.823Zm0 17.478a7.656 7.656 0 1 1 7.653-7.655A7.65 7.65 0 0 1 50.18 38.8Zm1.373-10.065H48.79v.005h-1.025v1.605h1.025v5.732H47.7v1.533h1.09v.012h2.763v-.012h.902v-1.533h-.902v-7.342Z"
              fill="#fff"
            />
          </svg>

          <Text variant="caption" color="white" mt={4}>Персональная информация</Text>
        </Flex>
      </Flex>
      <VStack as="form" alignItems="stretch" spacing={8} px={7} py={12} flexGrow={1}>
        <HStack spacing={7}>
          <FormControl pos="relative">
            <FormLabel>Имя*</FormLabel>
            <Input placeholder="Аяжан" />
            <FormErrorMessage pos="absolute" top="full" left={0}>This field is required.</FormErrorMessage>
          </FormControl>

          <FormControl>
            <FormLabel>Фамилия*</FormLabel>
            <Input placeholder="Нагибулла" />
            <FormErrorMessage>This field is required.</FormErrorMessage>
          </FormControl>
        </HStack>

        <FormControl>
          <FormLabel>Email*</FormLabel>
          <Input type="email" placeholder="montana@gmail.com" />
          <FormErrorMessage>Please enter your email address</FormErrorMessage>
        </FormControl>

        <FormControl>
          <FormLabel>Номер телефона*</FormLabel>
          <Input type="tel" placeholder="(+1) 408-657-9007" />
          <FormErrorMessage>Please enter your Phone Number</FormErrorMessage>
        </FormControl>

        <FormControl>
          <FormLabel>Должность:</FormLabel>
          <Input placeholder="Разработчик" />
          <FormErrorMessage>This field is required.</FormErrorMessage>
        </FormControl>

        <Box alignSelf="flex-end">
          <Button mt={8}>
            Сохранить
          </Button>
        </Box>
      </VStack>
    </Flex>
  )
}

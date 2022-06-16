import { LayoutFC } from '../../type'
import { RegistrationLayout } from '@components/Layout/RegistrationLayout'
import { Box, Button, Circle, Flex, FlexProps, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { FormField } from '@components/FormField'

interface PurpleCircleProps {
  step: string
}

const PurpleCircle: React.FC<PurpleCircleProps> = ({ children, step }) => {
  return (
    <Box pos="relative">
      <Circle
        size="59px"
        bg="linear-gradient(90deg, #F093FB 0%, #F5576C 100%), #2290FF"
        color="white"
      >
        {step}
      </Circle>
      <Text
        whiteSpace="nowrap"
        pos="absolute"
        bottom={-10}
        left="50%"
        transform="translateX(-50%)"
        variant="caption"
      >
        {children}
      </Text>
    </Box>
  )
}

interface StepperProps {
  currentStep: number
  props?: FlexProps
}

const Stepper: React.FC<StepperProps> = ({ currentStep = 3, props }) => {
  const activeBg = 'linear-gradient(90deg, #F5576C 0%, #F093FB 100%), #2290FF'

  return (
    <Flex alignItems="center" {...props}>
      <PurpleCircle step="01">Ваши данные</PurpleCircle>
      <Box h={3} bg={currentStep >= 2 ? activeBg : '#F3F3F3'} maxW="336px" w="full"></Box>
      <PurpleCircle step="02">О компании</PurpleCircle>
      <Box h={3} bg={currentStep == 3 ? activeBg : '#F3F3F3'} maxW="336px" w="full"></Box>
      <PurpleCircle step="03">Email</PurpleCircle>
    </Flex>
  )
}

export const StepsPage: LayoutFC = () => {
  return (
    <Flex flexDir="column" w="100%" maxW="1146px" bg="white" py="80px" px={10}>
      <Stepper currentStep={1} props={{ alignSelf: 'center', w: 'full', maxW: '800px' }} />
      <Flex flexDir="column" as="form">
        <VStack mt={10} w="full" alignItems="stretch">
          <HStack>
            <FormField label="Имя*" />
            <FormField label="Фамилия*" />
          </HStack>
          <FormField label="Email адрес*" />
          <FormField label="Номер телефона*" />
          <FormField label="Ваша позиция в компании*" />
        </VStack>
        <HStack ml="auto" mt={7}>
          <Button w="193px" variant="secondary">
            Предыдущий
          </Button>
          <Button w="145px">Дальше</Button>
        </HStack>
      </Flex>
    </Flex>
  )
}

StepsPage.getLayout = RegistrationLayout

export default StepsPage

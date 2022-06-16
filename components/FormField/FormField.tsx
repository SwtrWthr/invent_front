import React from 'react'
import { FormControl, FormErrorMessage, FormLabel, Input, InputProps } from '@chakra-ui/react'

interface Props {
  label: string
  placeholder?: string
  errorText?: string
  inputProps?: InputProps
  type?: 'number' | 'text'
}

export const FormField: React.FC<Props> = ({
  label,
  placeholder,
  inputProps,
  errorText,
  type = 'text',
}) => {
  return (
    <FormControl pos="relative">
      <FormLabel color="text" fontWeight="black">
        {label}
      </FormLabel>
      <Input placeholder={placeholder} type={type} {...inputProps} />
      <FormErrorMessage pos="absolute" top="full" left={0}>
        {errorText ?? 'Это поле обязательно'}
      </FormErrorMessage>
    </FormControl>
  )
}

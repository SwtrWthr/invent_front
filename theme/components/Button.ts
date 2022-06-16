import { StyleConfig } from '@chakra-ui/theme-tools'

export const Button: StyleConfig = {
  defaultProps: {
    variant: 'primary',
  },
  variants: {
    primary: {
      bg: 'main',
      color: 'white',
    },
    secondary: {
      color: 'text-secondary',
      bg: '#F3F3F3',
    },
    add: {
      border: '1px solid',
      borderColor: "main",
      color: 'main',
      h: 12,
    },
  },
}

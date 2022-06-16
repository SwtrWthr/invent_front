import { StyleConfig } from '@chakra-ui/theme-tools'

export const Text: StyleConfig = {
  defaultProps: {
    variant: 'base',
  },
  variants: {
    base: {
      fontSize: 'md',
      lineHeight: 'base',
      fontWeight: 'black',
    },
    heading: {
      fontSize: '22px',
      lineHeight: '27px',
      fontWeight: 'black',
      color: 'text',
    },
    caption: {
      fontSize: '18px',
      lineHeight: '22px',
      fontWeight: 'black',
      color: 'text',
    },
    small: {
      fontSize: 'xs',
      lineHeight: '18px',
      fontWeight: 'bold',
    },
  },
}

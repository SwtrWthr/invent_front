import type { ComponentStyleConfig } from '@chakra-ui/theme'

export const Tabs: ComponentStyleConfig = {
  parts: ['tab', 'tablist'],
  defaultProps: {
    variant: 'base',
    size: 'lg',
  },
  variants: {
    base: {
      tab: {
        px: 8,
        bg: 'white',
        color: 'text',
        _hover: {
          bgColor: 'main',
          color: 'white',
        },
        _selected: {
          bgColor: 'main',
          color: 'white',
        },
      },
    },
  },
  sizes: {
    lg: {
      tablist: {
        h: '60px',
      },
    },
  },
}

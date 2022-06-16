import { ComponentStyleConfig } from '@chakra-ui/theme'

export const Table: ComponentStyleConfig = {
  parts: ["table", "th", "td", "tr"],
  defaultProps: {
    variant: 'base',
  },
  variants: {
    base: {
      table: {
        borderCollapse: "collapse",
        border: "1px solid #DDDFE1"
      },
      th: {
        border: "1px solid #DDDFE1",
      },
      td: {
        border: "1px solid #DDDFE1",
        fontWeight: 900,
        color: 'text-secondary',
      }
    }
  }
}
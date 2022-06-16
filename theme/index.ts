import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { colors } from './colors'
import { Text } from './components/Text'
import { layerStyles } from '@theme/layerStyles'
import { Tabs } from '@theme/components/Tabs'
import { Button } from '@theme/components/Button'
import { Table } from '@theme/components/Table'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const components = {
  Text,
  Tabs,
  Button,
  Table,
}

const styles = {
  global: {
    'html, body': {
      height: 'full',
    },
  },
}

export const theme = extendTheme({ config, colors, components, styles, layerStyles })

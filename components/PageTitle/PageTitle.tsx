import React from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Text } from '@chakra-ui/react'

interface Props {
  breadcrumbs?: string[]
}

export const PageTitle: React.FC<Props> = ({ breadcrumbs, children }) => {
  return (
    <Flex h="64px" p={8} alignItems="center" bg="main-transparent">
      <Text variant="heading" color="main">
        {children}
      </Text>
      <Breadcrumb separator="-" ml="auto">
        {breadcrumbs?.map((b) => (
          <BreadcrumbItem key={b}>
            <BreadcrumbLink href="#">{b}</BreadcrumbLink>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    </Flex>
  )
}

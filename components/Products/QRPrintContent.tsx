import React, { RefObject } from 'react'
import { Box, Image } from '@chakra-ui/react'

interface Props {
  src: string
}

const QRPrintContent = ({ src }: Props) => {
  return (
    <Box mt={4}>
      <Image boxSize='200px' src={src} alt={'QR code'}/>
    </Box>
  )
}

export default QRPrintContent;

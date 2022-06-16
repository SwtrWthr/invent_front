import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Area, AreaChart, Tooltip } from 'recharts'

const data = [
  {
    revenue: 1600,
    revenueOld: 1200,
  },
  {
    revenue: 1400,
    revenueOld: 1000,
  },
  {
    revenue: 1200,
    revenueOld: 800,
  },
]

export const TotalRevenue: React.FC =()=> {
  return (
    <Box>
      <Flex>
        <Box>
          <Text>Total Revenue</Text>
          <Text>75%</Text>
        </Box>
        <Box>
          <Text>$10000 (Rev.)</Text>
          <Text>$1625 (Viewer)</Text>
        </Box>
      </Flex>
      <Box>
        <AreaChart width={730} height={250} data={data}
                   margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <Tooltip />
          <Area type="monotone" dataKey="revenue" stroke="#2290FF" fillOpacity={1} fill="url(#colorUv)" />
          <Area type="monotone" dataKey="revenueOld" stroke="#71D875" fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>
      </Box>
    </Box>
  )
}
import { Box, Container } from '@mui/material'
import React from 'react'
import OrderStatus from './OrderStatus'
import ProductInfo from './ProductInfo'

const IndividualOrder = () => {
  return (
    <div>
      <Container>
        <Box sx={{
            display:'flex'
        }}>
            <Box><ProductInfo/></Box>
            <Box><OrderStatus /></Box>
        </Box>
      </Container>
    </div>
  )
}

export default IndividualOrder

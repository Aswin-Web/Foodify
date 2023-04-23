import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import BasicTable from '../utils/Table'
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";

const data = [
  {
    Sl_no: 1,
    Name: "Biriyani",
    Order_date: Date.now(),
    Price: 50,
    view: <BorderColorOutlinedIcon />,
  },
  { Sl_no: 2, Name: "Masala Dosa", Order_date: Date.now(), Price: 125 },
];
const Order = () => {
  return (
    <div>
      <Container>

     <Box>
      <Typography variant="h4" color="initial">
        My Orders
      </Typography>
     </Box>
     {/* Table View */}
     <Box>
      <BasicTable titledata={['Sl no','Name','Order date','Price','View']} contentdata={data}/>
     </Box>
      </Container>
    </div>
  )
}

export default Order

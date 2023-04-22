import { Box } from '@mui/material'
import React from 'react';
import Table from "../utils/Table";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
const titledata=["S.No","Name","Quantity","Price","Status","Edit"]
const contentdata = [
  {
    sl_no: 1,
    name: "Aswin",
    quantity: 5,
    price: 500,
    status: "processing",
    edit: <BorderColorOutlinedIcon />,
  },
  { sl_no: 1, name: "Aswin", quantity: 5, price: 500, status: "processing" },
];
const OrderModule = () => {
  return (
    <div>
      <Box sx={{
        padding:'2%  3%'
      }}>
        <Table titledata={titledata} contentdata={contentdata} />
      </Box>
    </div>
  );
}

export default OrderModule

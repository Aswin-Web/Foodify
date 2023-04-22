import { Box, TextField, FormControlLabel, Switch, FormControl, FormLabel, FormHelperText, Typography, Button } from '@mui/material'
import React from 'react'
import Table from '../utils/Table'

const CouponModule = () => {
  return (
    <div>
      <Box
        sx={{
          padding: "1rem",
          border: "1px solid grey",
        }}
      >
        <Typography variant="h6" color="#D01443">
          Generate New Coupon
        </Typography>
        <FormControl
          sx={{
            border: ".5px solid grey",
            padding: "1rem",
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <Box>
            <FormLabel>Coupon Name</FormLabel>
            <br />
            <TextField id="" label="Name" placeholder="FLAT50" />
            <FormHelperText></FormHelperText>
          </Box>
          <Box>
            <FormLabel>Percentage Discount</FormLabel>
            <br />
            <TextField id="" type="number" label="Discount" placeholder="50" />
            <FormHelperText></FormHelperText>
          </Box>
          <Box>
            <FormLabel>Minimum Order</FormLabel>
            <br />
            <TextField
              id=""
              label="Min-Amount"
              placeholder="Minimum total to apply Coupon"
            />
            <FormHelperText></FormHelperText>
          </Box>

          <Box>
            <FormLabel>Atmost Uses</FormLabel>
            <br />
            <TextField
              id=""
              label="Number of times can be used"
              placeholder="50"
            />
            <FormHelperText></FormHelperText>
          </Box>
          <Box>
            <Button variant="outlined" color="error">
              Create Coupon
            </Button>
          </Box>
        </FormControl>
        <br />
        <Box sx={{
          padding:'1rem',
          border:'1px solid grey'
        }}>
          <Table
            titledata={[
              "Sl No.",
              "Coupon Name",
              "Atmost Uses",
              "Coupon Used",
              "Expired",
              "Remove",
            ]}
            contentdata={[{ name: 1 }]}
          />
        </Box>
      </Box>
    </div>
  );
}

export default CouponModule

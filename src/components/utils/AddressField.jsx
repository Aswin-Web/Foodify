import { Box, FormControl, TextField } from '@mui/material'
import React from 'react'

const AddressField = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",

        justifyContent: "space-around",
        alignItems: "baseline",
      }}
    >
      <TextField
        margin="normal"
        id="margin-dense"
        label="Name"
        variant="outlined"
      />

      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        margin="normal"
      />

      <TextField
        type="Number"
        id="outlined-basic"
        label="Mobile Number"
        variant="outlined"
        margin="normal"
      />

      <TextField
        type="Number"
        id="outlined-basic"
        label="Postal Code"
        variant="outlined"
        margin="normal"
      />
      <TextField
        id="outlined-basic"
        label="District"
        variant="outlined"
        margin="normal"
      />
      <TextField
        id="outlined-multiline-static"
        label="Address"
        multiline
        rows={4}
        defaultValue="Default Value"
        margin="normal"
      />
    </Box>
  );
}

export default AddressField
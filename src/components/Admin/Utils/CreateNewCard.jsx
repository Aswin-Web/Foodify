import React from 'react'
import Container from '@mui/material/Container'
import { Box, FormControl, FormLabel, TextField } from '@mui/material'

const CreateNewCard = () => {
  return (
    <div>
      <Container>
        <Box>
          <FormControl>
            <FormLabel>Card Title</FormLabel>
            <TextField id="1" label="Title" />
            <FormLabel>Card Description</FormLabel>
            <TextField id="1" label="Short Description" />
            <FormLabel>Card Image</FormLabel>
            <TextField id="1" label="Image" />
            <FormLabel>Card Price</FormLabel>
            <TextField id="1" label="Price" />
          </FormControl>
        </Box>
      </Container>
    </div>
  );
};
export default CreateNewCard
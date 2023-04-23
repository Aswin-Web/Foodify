import { Box, Container, Typography } from '@mui/material'
import React from 'react';
import Card from '../utils/cards'

const Wishlist = () => {
  return (
    <div>
      <Container>
        <Box>
          <Typography
            variant="h4"
            sx={{
              color: "#d01443",
              fontWeight: "bolder",
            }}
          >
            My Wishlist
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent:'center',
            flexWrap: "wrap",
          }}
        >
          <Card />
          <Card />
          <Card />
          
        </Box>
      </Container>
    </div>
  );
}

export default Wishlist

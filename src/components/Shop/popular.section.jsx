import React from 'react'
import classes from './popular.module.css'
import { Box, Typography } from '@mui/material'
import Card from '../utils/cards'
const PopularSection = () => {
  return (
    <div>
      <Box>
        <Box className={classes.popular_heading}>
          <Typography variant="h2">
            Our <span>Popular</span> Items
          </Typography>
          <br />
          <Typography variant="subtitle1">
            My favorites herbs include mint, basil, cilantro, thyme, rosemary,
            parsley, oregano, chervil, tarragon, cumin, dill, bay leaves and
            za'ata. What are you waiting for? GRAB the Offer Soon....!
          </Typography>
        </Box>

        <Box sx={{
            display:'flex'
        }}>
          <Card />
          <Card />
          <Card />
          <Card />
        </Box>
      </Box>
    </div>
  );
}

export default PopularSection
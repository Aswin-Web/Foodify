import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import Card from '../../components/utils/cards'
import classes from './cards.module.css'

const Cards = () => {
  return (
    <div>
      <Container>
        <div className={classes.card_body}>
          <Box
            sx={{
              text: "center",
            }}
          >
            <Typography variant="h3" className={classes.pink_text}>
              <span>
                Our&nbsp;
                <span
                  style={{
                    color: "#d01443",
                    alignContent: "center",
                    display: "inline-block",
                  }}
                >
                  Popular&nbsp;
                </span>
                Items
              </span>
            </Typography>
          </Box>
          <Box className={classes.card_para}>
            <Typography
              variant="subtitle1"
              sx={{
                width: "70%",
              }}
              className={classes.card_para}
            >
              &nbsp;Eating is so intimate. It’s very sensual. When you invite
              someone to sit at your table and you want to cook for them, you’re
              inviting a person into your life.
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Card />
            <Card />
            <Card />
            <Card />
          </Box>
        </div>
      </Container>
    </div>
  );
}

export default Cards

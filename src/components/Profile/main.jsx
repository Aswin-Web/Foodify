import { Box, Container, CardMedia, Avatar, Typography, Button } from '@mui/material'
import React from 'react'
import shef from '../../images/shef.jpg'
const Profile = () => {
  return (
    <div>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Box
            sx={{
              flex: "1",
              width: "100%",
            }}
          >
            <Box>
              <Avatar
                alt="Remy Sharp"
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.figma.com%2Fcommunity%2Fplugin%2F1075555223065407638%2FColor-Hunt&psig=AOvVaw3qHqFA3hS_pcjtfktbJO87&ust=1682274696248000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLCPluSPvv4CFQAAAAAdAAAAABAE"
                sx={{ width: "10rem", height: "10rem" }}
              />
            </Box>
            <Box>
              <Typography variant="h5" color="initial">
                Aswin
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              flex: "2",
              width: "100%",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <Box>
              <Button variant="outlined" color="error">
                Your Wishlist
              </Button>
            </Box>
            <Box>
              <Button variant="outlined" color="error">
                Your Orders
              </Button>
            </Box>
            <Box>
              <Button variant="outlined" color="error">
                Notification
              </Button>
            </Box>
          </Box>
          
        </Box>

        <Box></Box>
      </Container>
    </div>
  );
}

export default Profile

import React from "react";
import { Box, Button, Container, Rating, Typography } from "@mui/material";
import classes from "./main.module.css";
import shef from "../../images/shef.jpg";
import user from "../../images/user.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const AboutPage = () => {
  return (
    <div>
      <Container>
        <div className={classes.text_container}>
          <Box className={classes.text_container_text}>
            <Typography variant="h2">
              <span className={classes.text_heading_pink}>About</span> Us
            </Typography>
            <br />
            <Typography className={classes.text_subtitle} variant="Subtitle">
              Shef is a homemade food marketplace that helps local cooks to make
              a meaningful income from home by selling authentic, homemade
              dishes to their neighbors.
            </Typography>
            <br />
            <br />
            <Button
              className={classes.text_btn}
              sx={{
                color: "white",
                background: "#d01443",
              }}
              >
              Learn More
            </Button>
          </Box>
          <Box className={classes.text_container_image}>
            <img src={shef} alt="Waiter Image" srcset="" />
          </Box>
        </div>
        <div className={classes.text_container}>
          <Box className={classes.text_container_image}>
            <img src={user} alt="Review" />
          </Box>
          <Box className={classes.text_container_text}>
            <Typography
              className={classes.text_heading_pink}
              sx={{
                fontWeight: "bold",
              }}
              variant="h3"
            >
              What Our Customer Says
            </Typography>
            <Typography
              className={classes.text_heading_pink}
              sx={{
                fontWeight: "bold",
              }}
              variant="h3"
            >
              About Us
            </Typography>
            <Box
              className={classes.review_entity}
              sx={{
                alignItems: "stretch",
                fontWeight: "bold",
              }}
            >
              <Box>
                <Typography
                  className={classes.text_heading_pink}
                  sx={{
                    fontWeight: "700",
                  }}
                  variant="h5"
                >
                  Ashly James
                </Typography>
              </Box>
              <Box>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              </Box>
            </Box>
            <Typography className={classes.text_subtitle} variant="Subtitle">
              Shef is a homemade food marketplace that helps local cooks to make
              a meaningful income from home by selling authentic, homemade
              dishes to their neighbors.
            </Typography>
            <br />
            <br />
            <Box
              sx={{
                marginTop: "10%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                className={classes.text_btn}
                sx={{
                  color: "white",
                  background: "#d01443",
                }}
              >
                <Typography
                  className={classes.text_subtitle}
                  variant="Subtitle"
                >
                  Write your Assesment
                </Typography>
                <ArrowForwardIcon />
              </Button>
            </Box>
          </Box>
        </div>
      </Container>
    </div>
  );
};

export default AboutPage;

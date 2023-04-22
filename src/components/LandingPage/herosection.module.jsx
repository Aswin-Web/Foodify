import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import classes from "./herosection.module.css";
import hero from "../../images/hero.jpg";

const Herosection = () => {
  return (
    <div className={classes.body}>
      <Container>
        <Box className={classes.herosection_body}>
          <Box className={classes.herosection_text}>
            <Typography variant="h2">
              <span className={classes.herosection_text_pink}>
                Good Food Is A
              </span>
              <span className={classes.herosection_text_heading}>
                Celebration Of Life
              </span>
              <span >
                <Typography component="p" >
                  Picture your favorite fruit -mine is watermelon- or dessert in
                  your mind, hearing the cracking noise as you tear a piece,
                  feeling the cold in your hand as you grab it, smell its aroma
                  as you take it to your mouth... sense the texture as you bite.
                </Typography>
              </span>
              <div>
                <Button
                  sx={{
                    border: "2px solid #d01443",
                    backgroundColor: "#d01443",
                    color: "white",
                    margin: "0 10px",
                    "&:hover": {
                      backgroundColor: "white",
                      color: "#d01443",
                    },
                  }}
                >
                  Order Now
                </Button>
                <Button
                  sx={{
                    border: "2px solid #d01443",
                    color: "#d01443",
                    margin: "0 10px",
                    "&:hover": {
                      color: "white",
                      backgroundColor: "#d01443",
                    },
                  }}
                >
                  Learn More
                </Button>
              </div>
            </Typography>
          </Box>
          <Box className={classes.herosection_img}>
            <img
              src={hero}
              alt=""
              loading="lazy"
              className={classes.hero_imgtag}
            />
          </Box>
        </Box>
      </Container>
      <br />
    </div>
  );
};

export default Herosection;

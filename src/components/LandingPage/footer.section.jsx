import React from "react";
import classes from "./footer.module.css";
import { Box, Typography } from "@mui/material";
const Footer = () => {
  return (
    <div>
      <Box className={classes.footer_body}>
        <Box className={classes.footer_column}>
            <Box className={classes.footer_icon}>
          <img src="" alt="Icon image" />

            </Box>
        </Box>
        <Box className={classes.footer_column}>
          <Typography variant="h6">Menu</Typography>
          <ul>
            <li>Home</li>
            <li>Why Choose</li>
            <li>Special Menu</li>
            <li>Register Food</li>
            <li>Special Crafts</li>
          </ul>
        </Box>
        <Box className={classes.footer_column}>
          <Typography variant="h6">Help</Typography>
          <ul>
            <li>Privacy</li>
            <li>Terms and Conditions</li>
            <li>Poicy</li>
            </ul>
        </Box>
        <Box className={classes.footer_column}>
          <Typography variant="h6">Contact</Typography>
          <ul>
            <li>+919751759478</li>
            <li>info@foodify.in</li>
            <li>Banglore,Karnataka</li>
                </ul>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;

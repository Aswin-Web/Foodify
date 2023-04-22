import React from "react";
import logo from "../../images/logo.png";
import TroubleshootOutlinedIcon from "@mui/icons-material/TroubleshootOutlined";
import {useState} from 'react'
import Button from "@mui/material/Button";
import classes from "./navbar.module.css";
import { Link } from "react-router-dom";


//
const navbar_button = {
  fontSize:'1.2rem',
  color: "black",
  textTransform: "capitalize",
  backgroundColor: "white",
  display: "inline-block",
};
const Navbar = () => {
  const [button, setbutton] = useState('home');

  return (
    <div>
      <div className={classes.navbar_body}>
        <div className={classes.navbar_icon}>
          <img src={logo} alt="food delivery app" />
        </div>

        <div className={classes.navbar_tab}>
          <div className={classes.navbar_tab}>
            <Link to="/">
              {button === "home" ? (
                <Button variant="outlined" color="error">
                  Home
                </Button>
              ) : (
                <Button sx={navbar_button} onClick={() => setbutton("home")}>
                  Home
                </Button>
              )}
            </Link>
          </div>
          <div className={classes.navbar_tab}>
            <Link to="/about">
              {button === "about" ? (
                <Button variant="outlined" color="error">
                  About Us
                </Button>
              ) : (
                <Button sx={navbar_button} onClick={() => setbutton("about")}>
                  About Us
                </Button>
              )}
            </Link>
          </div>
          <div className={classes.navbar_tab}>
            <Link to="/shop">
              {button === "shop" ? (
                <Button variant="outlined" color="error">
                  Shop
                </Button>
              ) : (
                <Button sx={navbar_button} onClick={() => setbutton("shop")}>
                  Shop
                </Button>
              )}
            </Link>
          </div>

          <div className={classes.navbar_tab}>
            <Button sx={navbar_button}>Contact</Button>
          </div>
          <div className={classes.navbar_tab}>
            <div
              style={{
                ...navbar_button,
                backgroundColor: "#d01443",
                padding: "6px",
                color: "white",
                borderRadius: "15px",
                cursor: "pointer",
              }}
            >
              <TroubleshootOutlinedIcon />
            </div>
          </div>
          <div className={classes.navbar_tab}>
            <Button
              sx={{
                ...navbar_button,
                backgroundColor: "#d01443",
                padding: "6px 12px",
                color: "white",
                borderRadius: "15px",
              }}
            >
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

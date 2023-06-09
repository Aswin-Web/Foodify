import React from "react";
import logo from "../../images/logo.png";
import TroubleshootOutlinedIcon from "@mui/icons-material/TroubleshootOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import {useState} from 'react'
import Button from "@mui/material/Button";
import classes from "./navbar.module.css";
import { Link } from "react-router-dom";
import { Avatar, Box, Menu, MenuItem } from "@mui/material";


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
  const [isAuth, setisAuth] = useState(false);
   const [anchorEl, setAnchorEl] = React.useState(null);
   const open = Boolean(anchorEl);
   const handleClick = (event) => {
     setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
     setAnchorEl(null);
   };
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
            {isAuth ? (
              <Box
                sx={{
                  ...navbar_button,
                  backgroundColor: "#d01443",
                  padding: ".3rem",
                  color: "white",
                  borderRadius: "50%",
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  onClick={handleClick}
                />
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                  sx={{
                    margin: " 1rem 0",
                  }}
                >
                  <MenuItem onClick={handleClose}>
                    <Link to="/cart">
                      <Box sx={{ color: "black" }}>My Cart</Box>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link to="/order">
                      <Box sx={{ color: "black" }}>My Orders</Box>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link to="/wishlist">
                      <Box sx={{ color: "black" }}>My Wishlist</Box>
                    </Link>
                  </MenuItem>

                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </Box>
            ) : (
              <Button
                variant="filled"
                sx={{
                  ...navbar_button,
                  backgroundColor: "#d01443",
                  
                  color: "white",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  "&:hover": {
                    backgroundColor: "#d1244f",
                    color: "white",
                  },
                }}
              >
                <GoogleIcon sx={{ margin: ".5rem" }} /> Sign up
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

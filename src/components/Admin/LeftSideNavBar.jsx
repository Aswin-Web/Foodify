import React, { useState } from "react";
import classes from "./LeftSideNavBar.module.css";
import { Box, Typography, Button } from "@mui/material";

// ICONS
import SsidChartIcon from "@mui/icons-material/SsidChart";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import LibraryAddOutlinedIcon from "@mui/icons-material/LibraryAddOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import RedeemOutlinedIcon from "@mui/icons-material/RedeemOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { Link } from "react-router-dom";
const Dashboard_Tab = {
  color: "white",
  border: "1px solid white",
  width: "100%",
  margin: "10px 0",
  display: "flex",
  justifyContent: "flex-start",
  gap: "10px",
  "&:hover": {
    border: "1px solid #ECF9FF",
  },
};
const Dashboard_Tab_Active = {
  color: "#d01443",
  backgroundColor: "white",
  width: "100%",
  margin: "10px 0",
  display: "flex",
  border: "1px solid white",
  justifyContent: "flex-start",
  gap: "10px",
  "&:hover": {
    border: "1px solid white",
    backgroundColor: "white",
  },
};

const LeftSideNavBar = () => {
  const [button, setbutton] = useState('traffic');
  return (
    <div>
      <Box>
        <Box className={classes.Navbar_heading}>
          <Typography variant="h4">Dashboard</Typography>
        </Box>
        <Box>
          <Link to="/admin">
            {button === "traffic" ? (
              <Button variant="outlined" sx={Dashboard_Tab_Active}>
                <SsidChartIcon />
                Traffic
              </Button>
            ) : (
              <Button variant="outlined" sx={Dashboard_Tab} onClick={()=>setbutton('traffic')}>
                <SsidChartIcon />
                Traffic
              </Button>
            )}
          </Link>
          <Link to="/admin/order">
            {button === "order" ? (
              <Button variant="outlined" sx={Dashboard_Tab_Active}>
                <LocalShippingOutlinedIcon />
                Orders
              </Button>
            ) : (
              <Button variant="outlined" sx={Dashboard_Tab} onClick={()=>setbutton('order')}>
                <LocalShippingOutlinedIcon />
                Orders
              </Button>
            )}
          </Link>
          <Link to="/admin/products">
            {button === "product" ? (
              <Button variant="outlined" sx={Dashboard_Tab_Active}>
                <LibraryAddOutlinedIcon />
                Products
              </Button>
            ) : (
              <Button variant="outlined" sx={Dashboard_Tab} onClick={()=>setbutton('product')}>
                <LibraryAddOutlinedIcon />
                Products
              </Button>
            )}
          </Link>
          <Link to="/admin/notification">
            {button === "notification" ? (
              <Button variant="outlined" sx={Dashboard_Tab_Active}>
                <CampaignOutlinedIcon />
                Notification
              </Button>
            ) : (
              <Button variant="outlined" sx={Dashboard_Tab} onClick={()=>setbutton('notification')}>
                <CampaignOutlinedIcon />
                Notification
              </Button>
            )}
          </Link>
          <Link to="/admin/coupon">
            {button === "coupon" ? (
              <Button variant="outlined" sx={Dashboard_Tab_Active}>
                <RedeemOutlinedIcon />
                Coupon
              </Button>
            ) : (
              <Button variant="outlined" sx={Dashboard_Tab} onClick={()=>setbutton('coupon')}>
                <RedeemOutlinedIcon />
                Coupon
              </Button>
            )}
          </Link>
          <Link to="/admin/logout">
            {button === "logout" ? (
              <Button variant="outlined" sx={Dashboard_Tab_Active}>
                <ExitToAppOutlinedIcon />
                Logout
              </Button>
            ) : (
              <Button variant="outlined" sx={Dashboard_Tab} onClick={()=>setbutton('logout')}>
                <ExitToAppOutlinedIcon />
                Logout
              </Button>
            )}
           
          </Link>
        </Box>
      </Box>
    </div>
  );
};

export default LeftSideNavBar;

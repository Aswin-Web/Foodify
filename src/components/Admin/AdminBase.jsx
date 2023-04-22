import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import classes from "./AdminBase.module.css";
import LeftSideNavBar from "./LeftSideNavBar";

const AdminBase = () => {
  return (
    <div>
      
      <Box className={classes.Admin_body}>
        <Box className={classes.Admin_Navbar}>
          <LeftSideNavBar />
        </Box>
        <Box className={classes.Admin_display}>
          <Outlet />
        </Box>
      </Box>
    </div>
  );
};

export default AdminBase;

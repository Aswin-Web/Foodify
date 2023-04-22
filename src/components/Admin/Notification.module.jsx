import { Box, TextField, Button } from "@mui/material";
import React from "react";

const NotificationModule = () => {
  return (
    <div>
      <Box
        sx={{
          height: "80vh",
          width: '100%',
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            border:'1px solid grey',
            padding:'1rem',
            display: "flex",
            flexDirection:'column'
          }}
        >
          <TextField id="" label="Username" />
          <br/>
          <TextField id="" label="Message" />
          <br/>
          <Button variant="outlined" color="error">
            Push Notifications
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default NotificationModule;

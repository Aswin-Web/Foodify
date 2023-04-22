import { Box, Typography } from "@mui/material";
import React from "react";


const SpecialityCard = (props) => {
    const {title,content,icon}=props
  return (
    <Box
      sx={{
        minHeight: "40vh",
        flex: 1,
        width: "50%",
        borderRadius: "8px",
        border: ".5px solid #E2D6D8",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ height: "100%" }}>
        <Box
          sx={{
            textAlign: "center",
            height: "60%",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Box
            sx={{
              marginTop: "5rem",
              backgroundColor: "#f9e3e8",
              padding: "5%",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {icon}
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography variant="h4">{title} </Typography>
      </Box>
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            marginBottom: "1rem",
            padding:'1rem'
          }}
        >
        {content}
        </Typography>
      </Box>
    </Box>
  );
};

export default SpecialityCard;

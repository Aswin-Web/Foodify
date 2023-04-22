import { Box, Container, Typography } from "@mui/material";
import classes from "./speciality.module.css";
import React from "react";
import SpecialityCard from "../utils/speciality.card";

import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import MopedIcon from "@mui/icons-material/Moped";

const data = [
  {
    name: "Easy to Order",
    content: `Food is any substance consumed by an organism for nutritional
              support. Food is usually of plant, animal, such as carbohydrates,
              fats, proteins, vitamins, or minerals`,
    icon: (
      <ListAltOutlinedIcon
        sx={{ margin: "5%", fontSize: "5rem", color: "#d01443" }}
      />
    ),
  },
  {
    name: "Best Quality",
    content: `Food is any substance consumed by an organism for nutritional
              support. Food is usually of plant, animal, such as carbohydrates,
              fats, proteins, vitamins, or minerals`,
    icon: (
      <ThumbUpAltIcon
        sx={{ margin: "5%", fontSize: "5rem", color: "#d01443" }}
      />
    ),
  },
  {
    name: "Fastest Delivery",
    content: `Food is any substance consumed by an organism for nutritional
              support. Food is usually of plant, animal, such as carbohydrates,
              fats, proteins, vitamins, or minerals`,
    icon: (
      <MopedIcon sx={{ margin: "5%", fontSize: "5rem", color: "#d01443" }} />
    ),
  },
];

const SpecialityComponent = () => {
  return (
    <div>
      <Container>
        <Box>
          <Box className={classes.heading_container}>
            <Typography variant="h2" className={classes.speciality_heading}>
              Why We <span>Are Best</span>
            </Typography>
          </Box>
          <Box className={classes.paragraph_container}>
            <Typography variant="subtitle1" sx={{ width: "70%" }}>
              Food is any substance consumed by an organism for nutritional
              support. Food is usually of plant, animal, such as carbohydrates,
              fats, proteins, vitamins, or minerals.
            </Typography>
          </Box>
          <Box
            sx={{
              marginTop: "2rem",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              gap: "2rem",
            }}
          >
            {data.map(item => <SpecialityCard title={item.name} content={item.content} icon={item.icon} />)}
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default SpecialityComponent;

import React from "react";
import classes from "./productInfo.module.css";
import food from "../../images/food.jpg";
import {
  Avatar,
  Box,
  Button,
  Container,
  Rating,
  Typography,
} from "@mui/material";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
const ProductInfo = () => {
  return (
    <div>
      <Container>
        <Box className={classes.container}>
          <Box className={classes.container_img}>
            <img src={food} alt="Biriyani" srcset="" />
          </Box>
          <Box className={classes.container_text}>
            <Box>
              <Typography variant="h4" component="h1">
                Veggie Burger
              </Typography>
            </Box>
            <Box
              sx={{
                width: "80%",
                marginTop: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <Typography variant="h4" component="h1">
                Details
              </Typography>
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              <Box
                sx={{
                  display: "flex",
                  alignItem: "centre",
                }}
              >
                <SmsOutlinedIcon />

                <Typography
                  varaint="h5"
                  component="h1"
                  sx={{
                    marginLeft: "10%",
                  }}
                >
                  23
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                margin: "1rem",
                width: "75%",
              }}
            >
              <Typography variant="p" sx={{}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                amet expedita, nobis modi aliquam nam, sint quas porro dolorum
                voluptas enim. Quod similique vitae neque, praesentium minus
                repellat doloribus debitis?
              </Typography>
            </Box>
            <Box
              sx={{
                margin: "1rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box>
                <Typography variant="h6" component="h1">
                  Quantity
                </Typography>
                <Box>
                  <Typography
                    variant="h6"
                    component="h1"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <AddOutlinedIcon
                      sx={{
                        backgroundColor: "#d01443",
                        color: "white",
                        borderRadius: "50%",
                        cursor: "pointer",
                      }}
                    />
                    &nbsp;2 &nbsp;
                    <RemoveOutlinedIcon
                      sx={{
                        backgroundColor: "#d01443",
                        color: "white",
                        borderRadius: "50%",
                        cursor: "pointer",
                      }}
                    />
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Typography variant="h6" component="h1">
                  Price
                </Typography>
                <Box>
                  <Typography
                    variant="h6"
                    component="h1"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#d01443",
                      justifyContent: "center",
                    }}
                  >
                    <CurrencyRupeeOutlinedIcon />
                    &nbsp;120 &nbsp;
                  </Typography>
                </Box>
              </Box>
              <Box></Box>
            </Box>
          </Box>
        </Box>
        {/* Order Info */}
          <Box>
            {/* Shipping address */}
            <Box></Box>
            {/* Order Date */}
            <Box></Box>
            {/* Transation Details */}
            <Box></Box>
          </Box>
      </Container>
    </div>
  );
};

export default ProductInfo;

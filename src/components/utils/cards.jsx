import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StarsIcon from "@mui/icons-material/Stars";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Popup from '../utils/Dialog'
import { Box } from "@mui/material";
import CreateNewCard from "../Admin/Utils/CreateNewCard";

export default function ImgMediaCard(props) {
  const {isAdmin}=props
  return (
    <Card sx={{ maxWidth: 300, margin: "15px", border: "1px solid grey" }}>
      {isAdmin ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            flexDirection: "row",
            gap: "1rem",
          }}
        >
          <Popup
            isAdmin={isAdmin}
            title="Edit Card"
            PropsButtonTitle={
              <Typography variant="body1" color="initial">
                <DriveFileRenameOutlineIcon
                  sx={{ color: "#d01443", cursor: "pointer" }}
                />
              </Typography>
            }
            BodyField={<CreateNewCard />}
          />

          <Typography variant="body1" color="initial">
            <DeleteForeverIcon sx={{ color: "#d01443", cursor: "pointer" }} />
          </Typography>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            flexDirection: "row",
            margin: "0 1rem",
            padding:'1rem'
          }}
        >
          <FavoriteBorderIcon />
        </Box>
      )}
      <CardMedia
        component="img"
        alt="green iguana"
        image="https://media.istockphoto.com/id/1192094401/photo/delicious-vegetarian-pizza-on-white.jpg?s=612x612&w=0&k=20&c=Qsm2ikAI0Oz5JMu2COCmAODV_5U7YZtipj8Ic7BtJF8="
        sx={{
          height: "30vh",
          padding: "10px",
        }}
      />
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography gutterBottom variant="h6" component="div">
            Chicken Breast
          </Typography>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              color: " #d01443",
            }}
          >
            <StarsIcon />
            (5.0)
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          Breast. The breast is a lean cut of white meat found on the underside
          of a chicken. A whole breast includes two halves, which are usually
          separated and sold individually.
        </Typography>
      </CardContent>
      <CardActions>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              color: "#d01443",
            }}
          >
            $ 120
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#d01443",
              color: "white",
              "&:hover": {
                backgroundColor: "#d01443",
              },
            }}
          >
            Buy Now
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
}

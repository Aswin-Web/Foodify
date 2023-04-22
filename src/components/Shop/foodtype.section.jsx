import React from "react";
import classes from "./foodtype.module.css";
import { Box, Typography, Button } from "@mui/material";
import Card from "../utils/cards";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Popup from "../utils/Dialog";
import CreateNewCard from "../../components/Admin/Utils/CreateNewCard";
import EditHeading from "../Admin/Utils/EditHeading";
const AdminStyle = {
  border: "1px solid grey",
  padding: "1rem",
  marginTop: "1rem",
};
const Lunch = (props) => {
  const { title, isAdmin } = props;
  return (
    <div>
      <Box sx={isAdmin ? AdminStyle : {}}>
        {/* Admin Edit Add Button */}
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
              title="Create A New Card"
              PropsButtonTitle={
                <Typography variant="body1" color="initial">
                  <AddCircleOutlineIcon
                    sx={{ color: "#d01443", cursor: "pointer" }}
                  />
                </Typography>
              }
              BodyField={<CreateNewCard />}
            />
            <Popup
              isAdmin={isAdmin}
              title="Edit The Title and Short Message"
              PropsButtonTitle={
                <Typography variant="body1" color="initial">
                  <DriveFileRenameOutlineIcon
                    sx={{ color: "#d01443", cursor: "pointer" }}
                  />
                </Typography>
              }
              BodyField={<EditHeading />}
            />

            
            <Typography variant="body1" color="initial">
              <DeleteForeverIcon sx={{ color: "#d01443", cursor: "pointer" }} />
            </Typography>
          </Box>
        ) : (
          <></>
        )}
        <Box className={classes.food_variety}>
          <Typography variant="h2">
            <span>{title}</span>
          </Typography>
          <br />
          <Typography variant="subtitle1">
            My favorites herbs include mint, basil, cilantro, thyme, rosemary,
            parsley, oregano, chervil, tarragon, cumin, dill, bay leaves and
            za'ata. What are you waiting for? GRAB the Offer Soon....!
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
          }}
        >
          <Card isAdmin={isAdmin} />
        </Box>
        {!isAdmin ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              flexDirection: "row",
              gap: "1rem",
            }}
          >
            <Button
              variant="outlined"
              sx={{
                color: "#d01443",
                border: "1px solid #d01443",
                cursor: "pointer",
                "&:hover": {
                  border: "1px solid #d01443",
                },
              }}
            >
              View More
            </Button>
          </Box>
        ) : (
          <></>
        )}
      </Box>
    </div>
  );
};

export default Lunch;

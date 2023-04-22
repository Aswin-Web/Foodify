import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from '@mui/material/Typography'
import { Box, Checkbox } from "@mui/material";

export default function FormDialog(props) {
    const { PropsButtonTitle,BodyField,isAdmin,title } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {isAdmin ? (
        <Box onClick={handleClickOpen}>{PropsButtonTitle}</Box>
      ) : (
        <Button variant="outlined" color="error" onClick={handleClickOpen}>
          {PropsButtonTitle}
        </Button>
      )}

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{isAdmin ? title: "Select Address"}</DialogTitle>
        {!isAdmin ? (
          <DialogContent>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Checkbox />
              <Typography variant="body1" color="initial">
                Abin S, Gudalur-643212, TamilNadu, India,9751759478
              </Typography>
            </Box>
            {BodyField}
          </DialogContent>
        ) : (
          <>{BodyField}</>
        )}
        <DialogActions>
          <Button variant="outlined" color="error" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="outlined" color="success" onClick={handleClose}>
            {isAdmin ? "Save" : "Next"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


import React from "react";
import Container from "@mui/material/Container";
import {
  Box,
  FormControl,
  FormLabel,
  FormHelperText,
  TextField,
} from "@mui/material";

const EditHeading = () => {
  return (
    <div>
      <Container>
        <Box>
          <FormControl>
            <FormLabel>Heading Title</FormLabel>
            <TextField id="1" label="Title" />
            <FormLabel>Heading Message</FormLabel>
            <TextField id="1" label="Short Description" />
            
          </FormControl>
        </Box>
      </Container>
    </div>
  );
};
export default EditHeading;
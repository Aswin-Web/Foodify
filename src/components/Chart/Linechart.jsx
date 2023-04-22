import React from "react";
import Chart from "chart.js/auto";
import { Line, Bar } from "react-chartjs-2";
import Container from "@mui/material/Container";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";

const labels = ["","Today",""];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Weekly Traffic",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0,100,0],
    },
  ],
};

const LineChart = () => {
  return (
    <div>
      <Box sx={{ width: "100%",}}>
        <Box
          sx={{

            width: "100%",
            display: "flex",
            gap:"10px",
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              width: "80%",
              padding:'5%'
            }}
          >
            <Line data={data} />
          </Box>
          <Box
            sx={{
              width: "20%",
              height: "max-content",
              padding: "1%",
              textAlign: "center",
              border: "1px solid #e5e5e5",
              backgroundColor: "#e5e5e5",
              borderRadius: "10px",
            }}
          >
            <Typography
              variant="h6"
              color="#d01443"
              sx={{
                fontWeight: "bold",
              }}
            >
              Filter
            </Typography>
            <hr />
            <Box>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Site traffic"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Orders"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="New Users"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Income"
                />
              </FormGroup>
            </Box>
            <Typography
              variant="h6"
              color="#d01443"
              sx={{
                fontWeight: "bold",
              }}
            >
              Time Span
            </Typography>
            <hr />
            <Box>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="All"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Today"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Last 7 days"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Last 1 month"
                />
              </FormGroup>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default LineChart;

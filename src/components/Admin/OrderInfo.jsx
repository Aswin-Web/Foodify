import React from "react";
import classes from "../Cart/Cart.module.css";
import Container from "@mui/material/Container";
import {
  Box,
  Typography,
  Button,
  Avatar,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import BasicTable from "../utils/table";
import FormDialog from "../utils/Dialog";
import AddressField from "../utils/AddressField";
import Table from "../utils/Table";
const Cartitem = [
  "Sl No:",
  "Item",
  "Quantity",
  "Price per Individual",
  "Total Price",
];
const BillingItem = ["Charges", "Price"];
const CartRow = [
  {
    name: "Biriyani",
    image:
      "https://www.slurrp.com/web/_next/image?url=https%3A%2F%2Fimages.slurrp.com%2Fprod%2Frecipe_images%2Fbetter-butter%2Fkolkata-style-chicken-biriyani_9SLCVPDZ5PGROGV5DJA5.webp%3Fimpolicy%3Dslurrp-20210601%26width%3D1200%26height%3D675&w=1920&q=75",
    Quantity: 2,
    price: 450,
  },
  {
    name: "Meals",
    image:
      "https://www.slurrp.com/web/_next/image?url=https%3A%2F%2Fimages.slurrp.com%2Fprod%2Frecipe_images%2Fbetter-butter%2Fkolkata-style-chicken-biriyani_9SLCVPDZ5PGROGV5DJA5.webp%3Fimpolicy%3Dslurrp-20210601%26width%3D1200%26height%3D675&w=1920&q=75",
    Quantity: 1,
    price: 250,
  },
];
const BillingRow = [
  { RowName: "Total", Amount: 350 },
  {
    RowName: "Tax",
    Amount: "18%",
  },
  {
    RowName: "Total",
    Amount: "1280",
  },
];
const OrderInfo = () => {
  return (
    <div>
      <Container>
        <Box
          sx={{
            marginTop: "2rem",
            display: "flex",
          }}
        >
          <Box
            sx={{
              flex: "2",
              width: "100%",
            }}
          >
            <Container>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Avatar
                  sx={{
                    margin: "5px",
                  }}
                />
                <Typography variant="body1" color="initial">
                  Ash
                </Typography>
              </Box>
              <hr />
              <Box>
                <Box
                  sx={{
                    padding: "15px",
                  }}
                >
                  <Typography variant="body1" color="initial">
                    Order date
                  </Typography>
                  <Typography variant="body1" color="initial">
                    Transaction ID
                  </Typography>
                  <Typography variant="body1" color="initial">
                    Address
                  </Typography>
                </Box>
                <Box>
                  <FormDialog
                    PropsButtonTitle="Change Status"
                    BodyField={
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Select Status
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="Select Status"
                        >
                          <MenuItem value={10}>Ready For Shipping</MenuItem>
                          <MenuItem value={20}>Dispatched</MenuItem>
                          <MenuItem value={30}>Delivered</MenuItem>
                        </Select>
                      </FormControl>
                    }
                  />
                  <Button
                    variant="outlined"
                    color="success"
                    sx={{ margin: "10px 0" }}
                  >
                    Save
                  </Button>
                </Box>
              </Box>
            </Container>
            <Container>
              <Table titledata={Cartitem} contentdata={CartRow} />
            </Container>
          </Box>
          <Box
            sx={{
              flex: "1",
              width: "100%",
              textAlign: "center",
            }}
          >
            <Container>
              <Typography variant="h6" color="initial">
                Billing Section
              </Typography>
              <Box
                sx={{
                  textAlign: "justify",
                }}
              >
                <BasicTable
                  title={BillingItem}
                  row={BillingRow}
                  type={"Bill"}
                />
              </Box>
              <Box
                sx={{
                  margin: "1rem",
                }}
              ></Box>
            </Container>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default OrderInfo;

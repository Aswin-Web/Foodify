import React from "react";
import classes from "../Cart/Cart.module.css";
import Container from "@mui/material/Container";
import { Box, Typography, Button } from "@mui/material";
import BasicTable from "../utils/table";
import FormDialog from "../utils/Dialog";
import AddressField from "../utils/AddressField";
const Cartitem=['Sl No:', 'Item','Quantity','Price per Individual' ,'Total Price','Edit']
const BillingItem=['Charges', 'Price']
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
const BillingRow=[{RowName:'Total',
  Amount:350},
  {
RowName:'Tax',
Amount:"18%"

  },
{
RowName:'Total',
Amount:"1280"

  }]
const Cart = () => {
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
              <BasicTable title={Cartitem} row={CartRow} type={"Cart"} />
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
              >
                <FormDialog PropsButtonTitle='Click Here To CheckOut' BodyField={<AddressField/>} />
              </Box>
            </Container>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Cart;

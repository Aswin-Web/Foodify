import { Container } from '@mui/material'
import React from 'react'
import FoodType from '../Shop/foodtype.section'
const ProductModule = () => {
  return (
    <div>
      <Container>
        <FoodType isAdmin={true} title="Lunch" />
        <FoodType isAdmin={true}  title="Dinner" />
        <FoodType isAdmin={true}  title="Breakfast" />
        <FoodType isAdmin={true}  title="Lunch" />
        <FoodType isAdmin={true}  title="Starters" />
        <FoodType isAdmin={true}  title="Cool drinks" />
        <FoodType isAdmin={true}  title="Ice Creams" />
      </Container>
    </div>
  );
}

export default ProductModule

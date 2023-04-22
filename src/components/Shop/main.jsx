import React from 'react'
import classes from './main.css'
import {Container} from '@mui/material'
import PopularSection from './popular.section'
import FoodType from './foodtype.section'
const Main = () => {
  return (
    <div>
      <Container>
        <PopularSection />
        <FoodType title="Lunch" />
        <br />
        <br />
        <FoodType title="Dinner" />
        <br />
        <br />
        <FoodType title="Breakfast" />
        <br />
        <br />
        <FoodType title="Starters" />
        <br />
        <br />
        <FoodType title="CoolDrinks" />
        <br />
        <br />
        <FoodType title="IceCreams" />
      </Container>
    </div>
  );
}

export default Main
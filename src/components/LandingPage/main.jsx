import React from 'react'
import Herosection from './herosection.module'
import Cardsection from './cards.section'
import SpecialityComponent from './speciality.section'

const main = () => {
  return (
    <div>
      <Herosection />
      <br />
      <div>

      <Cardsection />
      <SpecialityComponent/>
      </div>
    </div>
  );
}

export default main

import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/FoodList.css'

import Plate1 from '../assets/avocadotoast.png'
import Plate2 from '../assets/pancakes.png'
import Plate3 from '../assets/pasta.png'
import Plate4 from '../assets/curry.png'
import Plate5 from '../assets/salad.png'
import Plate6 from '../assets/cake.png'


export default () => {
  return (
    <div className="listcontainer">
      <div className="titleContainer">
      <h1 className="samplePlateTitle">Cuisine</h1>

      </div>
      <div className="plateContainer">
        <div className="columnA">
          <Link to="/home/recipes/sort/HEALTHY"><img className="plate" src={Plate1} alt="avocado toast" /></Link>
          <Link to="/home/recipes/sort/BREAKFAST"><img className="plate" src={Plate2} alt="pancakes" /></Link>
          <Link><img className="plate" src={Plate3} alt="pasta" /></Link>
        </div>

        <div className="columnB">
          <Link><img className="plate" src={Plate4} alt="curry" /></Link>
          <Link><img className="plate" src={Plate5} alt="salad" /></Link>
          <Link><img className="plate" src={Plate6} alt="cake" /></Link>
        </div>

      </div>
    </div>
  )
}


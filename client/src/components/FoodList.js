import React from 'react'
import '../styles/FoodList.css'
import {Link} from 'react-router-dom'

import Plate1 from '../assets/avocadotoast.png'
import Plate2 from '../assets/pancakes.png'
import Plate3 from '../assets/pasta.png'
import Plate4 from '../assets/curry.png'
import Plate5 from '../assets/salad.png'
import Plate6 from '../assets/cake.png'


export default () => {
  return (
    <div>
        <div className="listcontainer">
            <Link to="/home/recipes/sort/HEALTHY"><img className="plate" src={Plate1} alt="avocado toast"/></Link>
            <Link to="/home/recipes/sort/BREAKFAST"><img className="plate" src={Plate2} alt="pancakes"/></Link>
            <img className="plate" src={Plate3} alt="pasta"/>
            <img className="plate" src={Plate4} alt="curry"/>
            <img className="plate" src={Plate5} alt="salad"/>
            <img className="plate" src={Plate6} alt="cake"/>
        </div>
    </div>
  )
}


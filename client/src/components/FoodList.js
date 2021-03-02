import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/FoodList.css'

import Plate1 from '../assets/avocadotoast.png'
import Plate2 from '../assets/pancakes.png'
import Plate3 from '../assets/pasta.png'
import Plate4 from '../assets/curry.png'
import Plate5 from '../assets/salad.png'
import Plate6 from '../assets/cake.png'


export default () => {

  const [d1, setD1] = useState('invisible')
  const [d2, setD2] = useState('invisible')

  const showButton = e => {
    e.preventDefault();
    console.log(e.target.title)

    switch(e.target.title){
      case "Health Food":
        setD1('visible')
        break
      case "Breakfast":
        setD2('visible')
        break
      default:
        //
    }
  };

  const hideButton = e => {
    e.preventDefault();
    setD1('invisible')
    setD2('invisible')
  };

  return (
    <div className="listcontainer">
      <div className="titleContainer">
        <h1 className="samplePlateTitle">Cuisine</h1>

      </div>
      <div className="plateContainer">
        <div className="columnA">



          <Link className="plate" to="/home/recipes/sort/HEALTHY" onMouseEnter={e => showButton(e)} onMouseLeave={e => hideButton(e)}>
            <button className={d1}>Health Food</button>
            <img title="Health Food" src={Plate1} alt="avocado toast" />
          </Link>


          <Link className="plate" to="/home/recipes/sort/BREAKFAST" onMouseEnter={e => showButton(e)} onMouseLeave={e => hideButton(e)}>
            <button className={d2}>Breakfast</button>
            <img title="Breakfast" src={Plate2} alt="pancakes" />
          </Link>


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


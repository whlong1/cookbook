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
  const [d3, setD3] = useState('invisible')
  const [d4, setD4] = useState('invisible')
  const [d5, setD5] = useState('invisible')
  const [d6, setD6] = useState('invisible')


  const showButton = e => {
    e.preventDefault()
    switch (e.target.title) {
      case "Health Food":
        setD1('visible')
        break
      case "Breakfast":
        setD2('visible')
        break
      case "Pasta":
        setD3('visible')
        break
      case "Curry":
        setD4('visible')
        break
      case "Salad":
        setD5('visible')
        break
      case "Dessert":
        setD6('visible')
        break
      default:
        console.log('error')
    }
  }

  const hideOverlay = e => {
    e.preventDefault()
    setD1('invisible')
    setD2('invisible')
    setD3('invisible')
    setD4('invisible')
    setD5('invisible')
    setD6('invisible')
  }

  return (
    <div className="listcontainer">
      <div className="titleContainer"></div>
      <div className="plateContainer">
        <div className="columnA">
          <Link className="plate" to="/home/recipes/sort/HEALTHY" onMouseEnter={e => showButton(e)} onMouseLeave={e => hideOverlay(e)}>
            <button className={d1}>Health Food</button>
            <img className="plateImg" title="Health Food" src={Plate1} alt="avocado toast"/>
          </Link>
          <Link className="plate" to="/home/recipes/sort/BREAKFAST" onMouseEnter={e => showButton(e)} onMouseLeave={e => hideOverlay(e)}>
            <button className={d2}>Breakfast</button>
            <img className="plateImg"  title="Breakfast" src={Plate2} alt="pancakes"/>
          </Link>
          <Link className="plate" to="/home/recipes/sort/PASTA" onMouseEnter={e => showButton(e)} onMouseLeave={e => hideOverlay(e)}>
            <button className={d3}>Pasta</button>
            <img className="plateImg"  title="Pasta" src={Plate3} alt="pasta"/>
          </Link>
        </div>
        <div className="columnB">
          <Link className="plate" to="/home/recipes/sort/CURRY" onMouseEnter={e => showButton(e)} onMouseLeave={e => hideOverlay(e)}>
            <button className={d4}>Curry</button>
            <img className="plateImg"  title="Curry" src={Plate4} alt="curry"/>
          </Link>
          <Link className="plate" to="/home/recipes/sort/SALAD" onMouseEnter={e => showButton(e)} onMouseLeave={e => hideOverlay(e)}>
            <button className={d5}>Salad</button>
            <img className="plateImg"  title="Salad" src={Plate5} alt="salad"/>
          </Link>
          <Link className="plate" to="/home/recipes/sort/DESSERT" onMouseEnter={e => showButton(e)} onMouseLeave={e => hideOverlay(e)}>
            <button className={d6}>Dessert</button>
            <img className="plateImg"  title="Dessert" src={Plate6} alt="cake"/>
          </Link>
        </div>
      </div>
      <div className="bottomBlock"></div>
    </div>
  )
}
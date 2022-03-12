import React from 'react'
import CarouselContainer from './CarouselContainer'
import './game.css'

const Games = () => {
  return (
    <div>
      <CarouselContainer genre='sports' />
      <CarouselContainer genre='action' />
      <CarouselContainer genre='strategy' />
    </div>
  )
}

export default Games
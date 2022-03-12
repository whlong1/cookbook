import React, { useState, useEffect } from 'react'
import 'react-multi-carousel/lib/styles.css'

// Components
import Carousel from "react-multi-carousel"
import GameCard from './GameCard'

import * as apiService from '../../services/apiService'
import { responsive } from './responsive'

const CarouselContainer = ({ genre }) => {
  const [games, setGames] = useState([])

  useEffect(() => {
    const getGamesByGenre = async () => {
      const data = await apiService.fetchGamesByGenre(genre)
      console.log('DATA:', data)
      setGames(data.results)
    }
    getGamesByGenre()
  }, [genre])

  return (
    <div className='carousel-container'>
      <h4>{genre.toUpperCase()}</h4>
      <Carousel
        ssr
        partialVisible
        itemClass="image-item"
        responsive={responsive}
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </Carousel>
    </div>
  )
}


export default CarouselContainer
import React, { useState } from 'react'

const GameCard = (props) => {
  const [hover, setHover] = useState(false)

  return (
    <div
      className='game-card'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover && <p>{props.game.name}</p>}
      <img src={props.game.background_image} />
    </div>
  )
}

export default GameCard
import React, { useContext } from 'react'
import GameContext from '../Context/GameContext'
import '../styles/Card.css'

export default function Card({ info }) {
  const { image, value, suit, code } = info
  const { handleCardSelection } = useContext(GameContext)

  const handleClick = async () => {
    handleCardSelection(code)
  }

  return (
    <div id='cardContainer' onClick={handleClick}>
      <img src={image} alt={`${value} of ${suit}`} className='cardImage'/>      
    </div>
  )
}

import React, { useContext } from 'react'
import '../styles/Score.css'
import GameContext from '../Context/GameContext'

export default function Score() {
  const {score} = useContext(GameContext)

  return (
    <div className='scoreContainer'>
      <h3>Current Score: {score.currentScore}</h3>
      <h3>High Score: {score.highScore}</h3>
    </div>
  )
}

import React, { useContext, useState } from 'react'
import GameContext from '../Context/GameContext'
import '../styles/Replay.css'

export default function Replay() {
  const { playAgain } = useContext(GameContext)
  const [cardsToDraw, setCardsToDraw] = useState(10)

  const handleClick = async () => {
    playAgain(cardsToDraw)
  }

  return (
    <div className='replayContainer'>
      <label>
        Cards for next game?
        <input name='cardsToDraw' 
        type="number"
        min='0'
        max='52'
        defaultValue={cardsToDraw}
        onChange={(e) => {
          setCardsToDraw(e.target.value)
        }}
        />
      </label>

      <button className='replayBtn' onClick={handleClick}>
        Restart
      </button>
      
    </div>
  )
}

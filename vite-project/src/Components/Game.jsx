import React, { useContext } from 'react'
import '../styles/Game.css'
import Card from './Card.jsx'
import Loading from './Loading.jsx'
import GameContext from '../Context/GameContext.jsx'
import GameOver from './GameOver/GameOver.jsx'


export default function Game() {
  const { isGameOver, isGameWon, cards } = useContext(GameContext)

  return (
    <div id="gameWrapper">
      {isGameOver !== true && isGameWon !== true ? (
        <div className='gameContainer'>
          {cards !== null && cards !== undefined ? (
            cards.map((card) => <Card info={card} key={card.code} />)
          ) : (
            <Loading />
          )}
          </div>
      ) : ( 
        <GameOver />
      )}
    </div>
  )
}

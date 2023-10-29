import React, { createContext } from 'react'

const GameContext = createContext({})

export function GameContextProvider() {
    const {score, cards, handleCardSelection, isGameover, isGamewon, playAgain} = 
    useActions()

  return (
    <div>
      
    </div>
  )
}

export default GameContext

import React, {useContext } from 'react'
import '../../styles/GameOver.css'
import Replay from '../Replay'
import Win from './Win'
import Loss from './Loss'
import GameContext from '../../Context/GameContext'

export default function GameOver() {
  const { isGameWon } = useContext(GameContext)
  return (
    <div className='gameOverContainer'>
      {isGameWon == true ? <Win /> : <Loss />}
      <Replay />
    </div>
  )
}

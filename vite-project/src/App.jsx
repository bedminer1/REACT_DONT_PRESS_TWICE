import './App.css'
import Game from './Components/Game'
import Score from './Components/Score'
import { GameContextProvider } from './Context/GameContext'

function App() {
  return (
    <div className='App'>
      <GameContextProvider>
        <div className='header'>
          <div className='headingText'>
            <h1>Don't Hit Twice</h1>
            <h3>Click on cards to earn points, but don't click the same card twice</h3>
          </div>

          <Score />
        </div>

        <Game />
      </GameContextProvider>
    </div>
  )
}

export default App

import React from 'react'
import Title from "../components/Title"
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"

const Endgame = () => {

  const state = useSelector(state => state.stateGame)
  console.log(state)
  const finished = (state === "win" || state === "lose") ? true : false;
  const gameWin = state ===  "win" ? true : false;
  const surrenderGame = state === "surrender" ? true : false;

  const restart = () => {

  }

  return (
    <div>
      <Title title="BATTLESHIP"></Title>
      {
        finished ?
          gameWin ?
            <>
              <h2>CONGRATULATIOS, YOU WON THIS GAME</h2>
            </>
          :
          <>
            <h2>YOU LOST.</h2>
          </>
        :
        <>
          <h2>Ups, you dont finished the game.</h2>
        </>
      }
      {
        surrenderGame ? 
        <h2>
          You gave up? Come on! You can do it!
        </h2>
        :
        <></>
      }
    <Link to="/" className='btn btn-danger' onClick={restart}>GO BACK</Link>
    </div>
  )
}

export default Endgame
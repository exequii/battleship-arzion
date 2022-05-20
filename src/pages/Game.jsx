import React from 'react'
import Title from "../components/Title"
import Board from "../components/Board"
import {Link} from 'react-router-dom'

const Game = () => {

  const userSquares = []
  const computerSquares = []

  const surrender = () =>{

  }
  return (
    <div>
      <Title title="BATLESHIP"></Title>
      <div className='container d-flex justify-content-evenly'>
        <Board squares={userSquares} player="EZEQUIEL"></Board>
        <Board squares={computerSquares} player="CPU"></Board>
      </div>
      <Link to="/endgame" onClick={surrender} className="btn btn-warning">SURRENDER</Link>
    </div>
  )
}

export default Game
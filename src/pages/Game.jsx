import React from 'react'
import Title from "../components/Title"
import BoardCpu from "../components/BoardCpu"
import BoardPlayer from "../components/BoardPlayer"
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"

const Game = () => {

  const state = useSelector(state => state)
  const dispatch = useDispatch();
  const userSquares = []
  const computerSquares = []

  const setSurrender = {
    type: "@battlesip/surrender",
    stateGame: "surrender"
  }

  const surrender = () =>{
    dispatch(setSurrender)
  }
  return (
    <div>
      <Title title="BATLESHIP"></Title>
      <div className='container d-flex justify-content-evenly'>
        <BoardPlayer squares={userSquares} player={state.namePlayer}></BoardPlayer>
        <BoardCpu squares={computerSquares} player="CPU"></BoardCpu>
      </div>
      <Link to="/endgame" onClick={surrender} className="btn btn-warning">SURRENDER</Link>
    </div>
  )
}

export default Game
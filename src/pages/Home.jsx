import React, {useState} from 'react'
import Title from "../components/Title"
import {Link} from 'react-router-dom'
import BoardPlayer from "../components/BoardPlayer"
import Ship from "../components/Ship"
import { useDispatch, useSelector } from "react-redux"

const Home = () => {

  const dispatch = useDispatch()
  const userSquares = [];
  const [namePlayer, setNamePlayer] = useState("");
  const [direction, setDirection] = useState("horizontal");

  const startGame = {
    type: "@battleship/initialization",
    stateGame: "starting"
  }

  const setPlayer = {
    type: "@player/saveNamePlayer",
    name: namePlayer
  }

  const handleChangeInputText = (event) => {
    setNamePlayer(event.target.value)
  }
  
  const initialization = () => {
    dispatch(startGame)
    dispatch(setPlayer)
  }

  const rotate = () => {
    if(direction === "horizontal") setDirection("vertical")
    else setDirection("horizontal")
  }
  
  return (
    <div>
      <Title title="BATTLESHIP"></Title>

      <div className='row d-flex w-100'>
        <div className='w-50'>
            <BoardPlayer squares={userSquares} player={namePlayer}></BoardPlayer>
        </div>

        <div className='container w-50 p-5'>
          <div className='d-flex flex-column align-items-start w-50'>
            <label htmlFor="">Name:</label>
            <input type="text" className='form-control mt-3 mb-3' value={namePlayer} placeholder='Enter name' onChange={handleChangeInputText} maxLength="10"/>
            <div className='d-flex w-100 justify-content-between'>
              <Link to='/game' onClick={initialization} className='block btn btn-info'>START GAME</Link>
              <button className='btn btn-warning' onClick={rotate}>ROTATE SHIPS</button>
            </div>

          </div>
        </div>

      </div>

      <h2>Ships</h2>
      <div className='d-flex justify-content-evenly'>
        <Ship spaces="4" name={"carrier-" + direction}></Ship>
        <Ship spaces="3" name={"crusier-" + direction}></Ship>
        <Ship spaces="3" name={"crusier-" + direction}></Ship>
        <Ship spaces="3" name={"crusier-" + direction}></Ship>
        <Ship spaces="2" name={"submarine-" + direction}></Ship>
      </div>
    </div>
  )
}

export default Home
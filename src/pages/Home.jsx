import React, {useState} from 'react'
import Title from "../components/Title"
import {Link} from 'react-router-dom'
import Board from "../components/Board"

const Home = () => {

  const userSquares = [];
  const [namePlayer, setNamePlayer] = useState("");

  const handleChangeInputText = (event) => {
    setNamePlayer(event.target.value)
  }
  
  const initialization = () => {
    
  }
  
  return (
    <div>
      <Title title="BATTLESHIP"></Title>
      <div className='row d-flex'>
        <div className='w-50'>
            <Board squares={userSquares} player={namePlayer}></Board>
        </div>

        <div className='container w-50 p-5'>
          <div className='d-flex flex-column align-items-start w-50'>
            <label htmlFor="">Name:</label>
            <input type="text" className='form-control mt-3 mb-3' value={namePlayer} placeholder='Enter name' onChange={handleChangeInputText} maxLength="10"/>
            <Link to='/game' onClick={initialization} className='block btn btn-info'>START GAME</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
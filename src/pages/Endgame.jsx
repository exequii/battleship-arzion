import React from 'react'
import Title from "../components/Title"
import {Link} from 'react-router-dom'

const Endgame = () => {


  const finished = false;

  const restart = () => {

  }

  return (
    <div>
      <Title title="BATTLESHIP"></Title>
      {
        finished ?
        <>
          <h2>WON | YOU LOST | YOU GAVE UP</h2>
        </>
        :
        <>
          <h2>YOU DIDN'T FINISH THE GAME</h2>
        </>
      }
    <Link to="/" className='btn btn-danger' onClick={restart}>GO BACK</Link>
    </div>
  )
}

export default Endgame
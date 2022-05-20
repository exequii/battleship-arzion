import React from 'react'
import Title from "../components/Title"
import {Link} from 'react-router-dom'

const Endgame = () => {

  const restart = () => {

  }

  return (
    <div>
      <Title title="BATTLESHIP"></Title>
      <h2>GANASTE | PERDISTE | TE RENDISTE</h2>
      <Link to="/" className='btn btn-danger' onClick={restart}>GO BACK</Link>
    </div>
  )
}

export default Endgame
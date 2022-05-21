import React from 'react'
import Title from "../components/Title"
import {Link} from 'react-router-dom'

const NotFound = () => {

  const restart = () => {
    console.log("RESTART")
  }

  return (
    <div>
      <Title title="ERROR 404 NOT FOUND"></Title>
      <Link to="/" className='btn btn-danger' onClick={restart}>GO BACK</Link>
    </div>
  )
}

export default NotFound
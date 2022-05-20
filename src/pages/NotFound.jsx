import React from 'react'
import Title from "../components/Title"

const NotFound = () => {

  const restart = () => {

  }

  return (
    <div>
      <Title title="ERROR 404 NOT FOUND"></Title>
      <button className='btn btn-danger' onClick={restart}>GO BACK</button>
    </div>
  )
}

export default NotFound
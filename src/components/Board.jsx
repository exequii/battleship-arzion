import React from 'react'


const Board = (props) => {
    const cantSquaresBoard = 100;
    const squares = Array(cantSquaresBoard).fill('')
    const namePlayer = props.player || "Player 1";

    
  return (
    <div className='container d-flex align-items-center'>
        <div className='w-50'>
            <h2 id="namePlayer">{namePlayer}</h2>
        </div>
        <div className='battle-grid'>
        {squares.map((element, index) => (
            <div key={index}></div>
        ))}
        </div>
    </div>
  )
}

export default Board

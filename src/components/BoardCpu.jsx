import React from 'react'
import computerShips from '../computerShips';


const BoardCpu = (props) => {
    var squares = [];
    const namePlayer = props.player || "CPU";

    for(let i = 0; i < 100; i++){
      var obj = {};
      squares.push(obj);
    }

    const verificationPositionTaken = (current,direction,squares,randomStart,ship) => {
      var lineIsTaken = false;
      current.forEach((element,index) => {
        var position = squares[randomStart + (index * direction)].position || "";
        if(position.includes("taken")){
          lineIsTaken = true;
        }
      })
      return lineIsTaken;
    }

    const generateLocationShip = (ship) => {
      let randomDirection = Math.floor(Math.random() * ship.directions.length)
      let current = ship.directions[randomDirection]
      let direction;
      if (randomDirection === 0) direction = 1
      if (randomDirection === 1) direction = 10

      let randomStart = Math.abs(Math.floor(Math.random() * squares.length - (ship.directions[0].length * direction)))

      const isTaken = verificationPositionTaken(current,direction,squares,randomStart,ship)
      const isAtRightEdge = current.some((index) => (randomStart + index) % 10 === 10 - 1)
      const isAtLeftEdge = current.some((index) => (randomStart + index) % 10 === 0)
      
      if (!isTaken && !isAtRightEdge && !isAtLeftEdge){
        current.forEach((element,index) => {
            squares[randomStart + (index * direction)].position = "taken " + ship.name;
        })
      } 
      else generateLocationShip(ship)
    }

    const generateRandomLocationsCpu = (computerShips) => {
        computerShips.forEach((element) => {
          generateLocationShip(element)
        })
    }

    const checkPosition = (event) => {
        var div = event.target;
        const position = event.target.className;
        if((position).includes("taken")){
          div.className = "sunken";
        }else{
          div.className = "water"
        }
    }

    generateRandomLocationsCpu(computerShips);

  return (
    <div className='container d-flex align-items-center'>
        <div className='w-50'>
            <h2 id="namePlayer">{namePlayer}</h2>
        </div>
        <div className='battle-grid' id={props.player}>
        {squares.map((element, index) => (
            <div key={index} id={index} 
            className={element.position} 
            onClick={checkPosition}
            ></div>
        ))}
        </div>
    </div>
  )
}

export default BoardCpu

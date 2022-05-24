import React,{useState} from 'react'
import { useDispatch, useSelector } from "react-redux"

const BoardPlayer = (props) => {
    var squares = [];
    const namePlayer = props.player || "Player 1";
    const state = useSelector(state => state)
    const [divShip, setDivShip] = useState()

    for(let i = 0; i < 100; i++){
      var obj = {};
      squares.push(obj);
    }

    var selectedShipNameWithIndex
    var draggedShip
    var draggedShipLength


    const dragOver = (e) => {
        e.preventDefault()
    }

    const dragEnter = (e) => {
        e.preventDefault()
    }

    const dragDrop = () => {
        setDivShip(state)
        console.log(divShip)
        // let shipNameWithLastId = draggedShip.lastChild.id
        // let shipClass = shipNameWithLastId.slice(0, -2)
         
        // console.log(shipNameWithLastId,shipClass)
        // let lastShipIndex = parseInt(shipNameWithLastId.substr(-1))
        // let shipLastId = lastShipIndex + parseInt(this.dataset.id)
        //  console.log(shipLastId)
        // const notAllowedHorizontal = [0,10,20,30,40,50,60,70,80,90,1,11,21,31,41,51,61,71,81,91,2,22,32,42,52,62,72,82,92,3,13,23,33,43,53,63,73,83,93]
        // const notAllowedVertical = [99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81,80,79,78,77,76,75,74,73,72,71,70,69,68,67,66,65,64,63,62,61,60]
        
        // let newNotAllowedHorizontal = notAllowedHorizontal.splice(0, 10 * lastShipIndex)
        // let newNotAllowedVertical = notAllowedVertical.splice(0, 10 * lastShipIndex)
    
        // selectedShipIndex = parseInt(selectedShipNameWithIndex.substr(-1))
    
        // shipLastId = shipLastId - selectedShipIndex
        //  console.log(shipLastId)
    
        // if (isHorizontal && !newNotAllowedHorizontal.includes(shipLastId)) {
        //   for (let i=0; i < draggedShipLength; i++) {
        //     let directionClass
        //     if (i === 0) directionClass = 'start'
        //     if (i === draggedShipLength - 1) directionClass = 'end'
        //     userSquares[parseInt(this.dataset.id) - selectedShipIndex + i].classList.add('taken', 'horizontal', directionClass, shipClass)
        //   }
        // } else if (!isHorizontal && !newNotAllowedVertical.includes(shipLastId)) {
        //   for (let i=0; i < draggedShipLength; i++) {
        //     let directionClass
        //     if (i === 0) directionClass = 'start'
        //     if (i === draggedShipLength - 1) directionClass = 'end'
        //     userSquares[parseInt(this.dataset.id) - selectedShipIndex + width*i].classList.add('taken', 'vertical', directionClass, shipClass)
        //   }
        // } else return
    
        // displayGrid.removeChild(draggedShip)
        // if(!displayGrid.querySelector('.ship')) allShipsPlaced = true
    }
 

  return (
    <div className='container d-flex align-items-center'>
        <div className='w-50'>
            <h2 id="namePlayer">{namePlayer}</h2>
        </div>
        <div className='battle-grid' id={props.player}>
        {squares.map((element, index) => (
            <div key={index} id={index} 
            className={element.position}
            onDragOver={dragOver}
            onDragEnter={dragEnter}
            onDrop={dragDrop}
            ></div>
        ))}
        </div>
    </div>
  )
}

export default BoardPlayer
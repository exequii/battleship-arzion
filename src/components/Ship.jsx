import React,{useState} from 'react'
import { useDispatch, useSelector } from "react-redux"

const Ship = (props) => {

    const state = useSelector(state => state)

    const direction = props.name;
    const numberSpaces = parseInt(props.spaces);
    const spaces = Array(numberSpaces).fill('');

    const [draggedShip, setDraggedShip] = useState();

    const dispatch = useDispatch();

    var selectedShipNameWithIndex;
    var draggedShipLength;

    const setDivShip = {
        type: "@player/setDivShip",
        div: draggedShip
      }


    const dragStart = (e) => {
        setDraggedShip(e.target)
        //draggedShipLength = draggedShip.childNodes.length
        console.log(setDivShip)
        dispatch(setDivShip)
    }

    const selectedShip = (e) => {
        selectedShipNameWithIndex = e.target.id
        console.log(selectedShipNameWithIndex)
    }

    return (
        <div className={direction + " ship"} draggable="true" 
            onMouseDown={selectedShip} 
            onDragStart={dragStart}
        >
            {
                spaces.map((element,index) => (
                    <div key={index} id={index} className="space-ship"></div>
                ))
            }
        </div>
    )
}

export default Ship
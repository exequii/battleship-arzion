import React from 'react'

const Ship = (props) => {

    const direction = props.name;
    const numberSpaces = parseInt(props.spaces);
    const spaces = Array(numberSpaces).fill('');

    return (
        <div className={direction + " ship"} draggable="true">
            {
                spaces.map((element,index) => (
                    <div key={index} className="space-ship"></div>
                ))
            }
        </div>
    )
}

export default Ship
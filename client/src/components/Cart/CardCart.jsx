import React, { useState } from "react";
import '../../styles/cardCart.css'
const CardCart = ({img,count,size,total, price, name, id, handleDelete}) => {

// const [count, setCount] = useState(countOriginal)
// const [size, setSize] = useState(sizeOriginal)

    return(
        <div className="d-flex containerCardCart justify-content-evenly">
            
            <div className="d-flex h-100 align-items-center">
                <img src={img} alt={name}  className="imgCardCart"/>
                <h3>{name}</h3>
                <div className="d-flex mx-4 h-75 bg-danger" style={{"width":" 2px"}}></div>
            </div>

            <div className="d-flex h-100 flex-column justify-content-center fontSizeCardCart">
                <h3 className="fontSizeCardCart">Size: {size}</h3> 
                <h3 className="fontSizeCardCart">Count: {count}</h3>
                <label className="changeDataLabel">Change size or count</label>
            </div>
            
            <div>
                <h3 className="fontSizeCardCart">Price: ${price}</h3>
                <h3 className="fontSizeCardCart">Total: ${total}</h3>
            </div>
        
            <div className="d-flex h-100">
                <div className="d-flex h-100 align-items-center controlCardCart justify-content-between">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Delete-button.svg/862px-Delete-button.svg.png" alt="delete" className="imgControlCardCart"
                     onClick={() => handleDelete(id + size)} />
                </div>
            </div>        
        </div>
    )
}

export default CardCart
import React, { useState } from "react";
import '../../styles/cardCart.css'
const CardCart = () => {

const img = 'https://image.goat.com/750/attachments/product_template_pictures/images/020/806/444/original/507844_00.png.png'    
const name = "Nike air jordan" 
const countOriginal = "2"  //para que se pueda modificar la cantidad desde el carrito 
const sizeOriginal = "6.5" //para que se pueda modificar la talla desde el carrito 
const price= "$45" 

const [count, setCount] = useState(countOriginal)
const [size, setSize] = useState(sizeOriginal)


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
            </div>
            
            <div>
                <h3 className="fontSizeCardCart">Price: {price}</h3>
            </div>
        
            <div className="d-flex h-100">
                <div className="d-flex h-100 align-items-center controlCardCart justify-content-between">
                    <img src="https://cdn-icons-png.flaticon.com/512/84/84380.png" alt="edit" className="imgControlCardCart" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Delete-button.svg/862px-Delete-button.svg.png" alt="delete" className="imgControlCardCart" />
                </div>
            </div>        
        </div>
    )
}

export default CardCart
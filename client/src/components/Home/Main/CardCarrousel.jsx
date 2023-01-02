import React from "react";
import "../../../styles/carrouselMain.css";

const CardCarrousel = ({name, img}) => {
    return(
        <div className="cardCarrousel" >
        <div className="img-back">
        </div >
        <img src={img} className="imgCardCarrousel" /> 
        <label className="d-flex txt">{name}</label>
    </div>
    )
}

export default CardCarrousel;
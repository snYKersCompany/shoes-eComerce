import React from "react";
import "./basketball.css"
const CardBasketball = ({name, img}) => {
    return(
        <div className="cardCarrouselBskt" >
            <div className="containerImgCardCarrouselBskt">
                <img src={img} className="imgCardCarrouselBskt" />   
            </div>
            <div className="d-flex containerTextCardCarrouselBskt">
                <label className="d-flex textCardCarrouselBskt">{name}</label>

            </div>
        </div>
    )
}

export default CardBasketball
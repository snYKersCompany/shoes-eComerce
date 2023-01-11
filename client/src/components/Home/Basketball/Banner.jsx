import React from "react";
import "./basketball.css"


const Banner= ({inverted, tittle, content, img, color, secondColor}) =>{    

    return(
        <div className={` ${inverted?"containerBannerAuxBskt":"containerBannerAuxBsktInvertedInv"}`}  
        // style={{"background-color": color}}
        >
            <div className="imgBannerAuxBskt" >
                <img src={img} alt="summer season" />
            </div>

            <div className="infoBannerAuxBskt" style={{"color": secondColor}}>
                <div className="tittleBannerAuxBskt">
                    <h3>{tittle}</h3>
                </div>

                <div className="contentBannerAuxBskt">
                    <p>{content}</p>
                </div>

                <div className="containerBtnBannerAuxBskt">
                    <button style={{"backgroundColor": secondColor, color}} className="btnBannerAuxBskt">View More</button>
                </div>
            </div>
        </div>
    )
}

export default Banner
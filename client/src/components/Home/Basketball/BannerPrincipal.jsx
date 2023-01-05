import React from "react";
import { Link } from "react-router-dom";
import "./basketball.css"


const BannerPrincipal = () =>{
    
    return(
        <div className="containerBannerBskt">
            <div className="containerInfoBannerBskt me-5">
                <h3 className="titleBannerBskt">Air Jordan 1 Mid “Xing Qi"</h3>
                <span className="spanBannerBskt">
                    Nike has brought back both obscure and beloved favorites alike. This year is no exception, as the brand is soon to reintroduce the Air Jordan 1 Mid XQ, whose original 240 pair run dropped back in 2007.
                </span>
                <Link to={`/home/63b3055f3995ecaae3db64d9`}>
                    <button className="buttonBannerBskt">More Info</button>
                </Link>
            </div>

            <div className="containerImgBannerBskt">
                <img src="https://ir.ebaystatic.com/pictures/campaigns/WPRO-2716/blog_feature.png" alt="foto principal de sneakers" className="imgBannerBskt" />
            </div>
        </div>
    )
}

export default BannerPrincipal
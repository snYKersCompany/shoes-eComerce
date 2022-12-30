import React from "react";
import "./basketball.css"

const Text = () => {
    return(
        <div className="d-flex justify-content-center pt-2 pb-2">
        <div className="containerTextBskt">
            <div className="imgTextBskt" style={{"background": "url(https://www.nawpic.com/media/2020/lamelo-ball-nawpic-46.jpg)", "background-size": "cover", "background-position": "center"}}>
            
            </div>

            <div className="d-flex flex-column infoTextBskt">
            <h3 className="containerTextBskth3">Feel the basketball, be the basketball</h3>
            <div>

            <p className="containerTextBsktp">The feeling of basketball is a <span> rush </span> of adrenaline, a 
            sense of unity, and a passion that fuels the game. It's the camaraderie of being part of
             a team, the thrill of connecting with other <span> players, and the  </span> joy that comes with finally getting the <span>  ball in the hoop.</span> Basketball is a game that can bring out the best in someone, and that's why we love it so much.
            </p>
            </div>

            </div>
        </div>
        </div>

    )
}

export default Text
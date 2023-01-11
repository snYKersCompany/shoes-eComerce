import React from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { IoHeartDislikeSharp } from "react-icons/io5";
import {Link} from "react-router-dom"
import "../../../styles/noFavourites.css";

function NoFavourites({leyend}) {
  return (
    <div className="fakeBodyNoFav">

          <h3 className="text-center">{leyend}</h3>

          <Link className="text-decoration-none" to={"/home"}>
            <button className={"btnCard1"}>Let's go!</button>
          </Link>
    </div>  
  );
}

export default NoFavourites;

import React from "react";
import { Link } from "react-router-dom";
import "../styles/LandingStyle.css";

export default function Landing() {
  return (
    <div className="landingPage">
      <div className="flex">
        <h1 className="landingTitle">Welcome to my Henry PI Videogames</h1>
        <span className="span">Developer: Juani Arrigoni</span>
        <span className="span">Purpose: Project in Bootcamp SoyHenry!!</span>
        <span className="span">Programming Language: JavaScript</span>
        <span className="span">
          React - Redux - NodeJs - CSS - PostgreSQL - Sequelize - Express{" "}
        </span>
      </div>
      <div>
        <Link to="/home">
          <button className="landingBtn">Enter</button>
        </Link>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";

import { GiHamburgerMenu, GiConverseShoe } from "react-icons/gi";
import { RiWomenFill } from "react-icons/ri";
import { IoIosBasketball } from "react-icons/io";
import { GrHomeRounded } from "react-icons/gr";

import "../../styles/Hamburger.css";

function Hamburger({ setActualPage, name, ...props }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="d-flex text-black">
      <div className="d-flex flex-column text-black justify-content-center align-items-center">
        <button
          variant="custom"
          onClick={handleShow}
          className="btn-hamburger d-flex justify-content-center align-items-center"
        >
          <GiHamburgerMenu />
        </button>
      </div>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>snYKers</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex">
          <div className="d-flex flex-column">
            <div className="d-flex flex-column">
              <div className="d-flex align-items-start  flex-column">
                <Link to={"/"} className="text-decoration-none">
                  <span className="d-flex align-items-center text-black fs-3">
                    <GrHomeRounded className="" />
                    <span className="ms-2">Home</span>
                  </span>
                </Link>

                <Link to={"/home"} className="text-decoration-none">
                  <span className="d-flex align-items-center text-black fs-3">
                    <GiConverseShoe className="" />
                    <span className="ms-2">Product</span>
                  </span>
                </Link>

                <Link to={"/basketball"} className="text-decoration-none">
                  <span className="d-flex align-items-center text-black fs-3">
                    <IoIosBasketball className="" />
                    <span className="ms-2">Basket</span>
                  </span>
                </Link>

                <Link to={"/women"} className="text-decoration-none">
                  <span className="d-flex align-items-center text-black fs-3">
                    <RiWomenFill className="" />
                    <span className="ms-2">Women</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Hamburger;

/* 


*/

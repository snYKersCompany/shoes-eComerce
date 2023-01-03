import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
//JSX
import MiddleViewCard from "./MiddleViewCard";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import { useAuth } from "../../../context/authContext";
//BS
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Carrousel from "../../Home/Main/Carrousel";

const PreviewModal = (props) => {
  let cart = JSON.parse(localStorage.getItem("carrito")) || [];
  const navigate = useNavigate();
  const { user } = useAuth();
  ///TOOLTIP///
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClickCartNav = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  const handleClickLoginCartNav = () => {
    navigate("/login ");
  };

  return (
    <div className="d-flex flex-wrap justify-content-center">
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-center">
            You added products to the cart
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MiddleViewCard product={cart.at(-1)} />
          <Carrousel />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>

          {user ? (
            <Link to="/cart">
              <Button variant="secondary customBtn">Go Cart</Button>
            </Link>
          ) : (
            <div ref={ref} className="text-center">
              <Button
                variant="secondary customBtn"
                onClick={handleClickCartNav}
                className="cartNav"
              >
                Go Cart
              </Button>

              <Overlay
                show={show}
                target={target}
                placement="top"
                container={ref}
                containerPadding={20}
              >
                <Popover id="popover-contained">
                  <Popover.Header
                    className="navToggle d-flex justify-content-center align-items-center"
                    as="h3"
                  >
                    <Button onClick={handleClickLoginCartNav} variant="link">
                      LogIn
                    </Button>
                  </Popover.Header>
                  <Popover.Body className="text-center">
                    <strong>You must be logged in </strong>
                    <br />
                    to enter the cart
                  </Popover.Body>
                </Popover>
              </Overlay>
            </div>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const Preview = ({ setProduct }) => {
  const [modalShow, setModalShow] = useState(false);

  const handleAddToCart = (e) => {
    setModalShow(true);
    setProduct(e);
  };

  return (
    <>
      <Button variant="primary" onClick={(e) => handleAddToCart(e)}>
        Add to cart
      </Button>

      <PreviewModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default Preview;

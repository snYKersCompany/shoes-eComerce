import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
//JSX
import MiddleViewCard from "./MiddleViewCard";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import AlertMSJ from "../../Auth/AlertMSJ";
import { useAuth } from "../../../context/authContext";
//BS
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Carrousel from "../../Home/Main/Carrousel";
import "../../../styles/Preview.css";

const PreviewModal = ({ repeated, ...rest }) => {
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
    <>
      {repeated === "true" ? (
        <div className="d-flex flex-wrap justify-content-center">
          <Modal
            {...rest}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title
                id="contained-modal-title-center"
                className="txt-center addedProducts"
              >
                This product is already in your cart
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <AlertMSJ message={"This product is already in your cart"} />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={rest.onHide} variant="danger">
                Close
              </Button>

              {user ? (
                <Link to="/cart">
                  <Button className="btn-to-cart">Go Cart</Button>
                </Link>
              ) : (
                <div ref={ref} className="text-center">
                  <Button
                    variant="secondary customBtn"
                    onClick={handleClickCartNav}
                    className="btn-to-cart"
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
                        <Button
                          onClick={handleClickLoginCartNav}
                          variant="link"
                        >
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
      ) : (
        <div className="d-flex flex-wrap justify-content-center">
          <Modal
            {...rest}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton
            className="coso-head"
            >
              <Modal.Title
                id="contained-modal-title-center"
                // className="addedProducts"
                className="coso-title"

              >
                You added products to the cart
              </Modal.Title>
            </Modal.Header>
            <Modal.Body             
            className="coso-body"
            >
              <MiddleViewCard product={cart.at(-1)} />
              <Carrousel />
            </Modal.Body>
            <Modal.Footer             
            className="coso-footer"
            >
              <Button onClick={rest.onHide} variant="danger">
                Close
              </Button>

              {user ? (
                <Link to="/cart">
                  <Button className="btn-to-cart">Go Cart</Button>
                </Link>
              ) : (
                <div ref={ref} className="text-center">
                  <Button
                    variant="secondary customBtn"
                    onClick={handleClickCartNav}
                    className="btn-to-cart"
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
                        <Button
                          onClick={handleClickLoginCartNav}
                          variant="link"
                        >
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
      )}
    </>
  );
};

const Preview = ({ setProduct, repeated }) => {
  const [modalShow, setModalShow] = useState(false);
  const [previewRepeated, setPreviewRepeate] = useState(); // eslint-disable-line

  const handleAddToCart = (e) => {
    setModalShow(true);
    setPreviewRepeate(repeated);
    setProduct(e);
  };

  return (
    <>
      <Button variant="primary" onClick={(e) => handleAddToCart(e)}>
        Add to cart
      </Button>
      <PreviewModal
        show={modalShow}
        repeated={repeated}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default Preview;

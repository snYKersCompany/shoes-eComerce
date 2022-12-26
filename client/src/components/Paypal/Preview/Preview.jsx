import React, { useState } from "react";
import CardsContainer from "../../CardsContainer/CardsContainer";
//JSX
import MiddleViewCard from "./MiddleViewCard";
//BS
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const PreviewModal = (props) => {
  let cart = JSON.parse(localStorage.getItem("carrito")) || [];

  console.log("preview Modal", cart);
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
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
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

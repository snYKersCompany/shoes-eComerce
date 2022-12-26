import React from "react";
//BS
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
//JSX
import CheckoutForm from "./CheckoutForm";

const PaymentModal = (props, { products, pricetotal }) => {
  console.log("PaymentModal priceTotal", pricetotal);
  console.log("PaymentModal products", products);
  return (
    <div className="d-flex flex-wrap justify-content-center">
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <CheckoutForm products={products} pricetotal={pricetotal} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const Payment = ({ products, priceTotal }) => {
  const [modalShow, setModalShow] = React.useState(false);

  const handleClick = () => {
    setModalShow(true);
  };

  console.log("Payment priceTotal", priceTotal);
  console.log("Payment products", products);

  return (
    <>
      <Button variant="secondary customBtn" onClick={() => handleClick()}>
        Pay
      </Button>

      <PaymentModal
        products={products}
        pricetotal={priceTotal}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default Payment;

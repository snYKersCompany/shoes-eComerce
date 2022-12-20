import React from "react";
import CardsContainer from "../../CardsContainer/CardsContainer";
//JSX
import MiddleViewCard from "./MiddleViewCard";
//BS
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const PreviewModal = (props) => {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MiddleViewCard />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const Preview = ({ products }) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <PreviewModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default Preview;

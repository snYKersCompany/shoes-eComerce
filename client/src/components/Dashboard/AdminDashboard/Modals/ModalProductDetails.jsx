import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";
import { useDispatch, useSelector } from "react-redux";
import { clearProductsDetail } from "../../../../redux/features/products/productsActions";
import ViewEditProduct from "./ViewEditProduct";
import ListGroup from "react-bootstrap/ListGroup";

import "../../../../styles/modalProduct.css";

const ModalProductDetails = (props) => {
  const dispatch = useDispatch();

  const { productDetail } = useSelector((state) => state.products);



  const handlerOnClick = () => {
    dispatch(clearProductsDetail({}));
  };


  const [viewStock, setViewStock] = useState(true);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="d-flex justify-content-center modalBackground"
    >
      <div className="modalBackground2 ">
      <ListGroup horizontal className={`horizontalWrapper`}>
          </ListGroup>
        <div className="header text-white align-items-center justify-content-center">
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="d-flex justify-content-center mt-3 text-yellow"
          >
            Product Details
          </Modal.Title>
        </div>

        <div className="">
          <Modal.Body className="d-flex ">
            <ViewEditProduct productDetail={productDetail} viewStock={viewStock} handlerOnClick={() => handlerOnClick()} />
          </Modal.Body>
        </div>

        <div className="d-flex justify-content-end me-5 mb-4">
          <Button
            className="modalBtn ms-3"
            onClick={() => {
              setViewStock(!viewStock);
            }}
          >
            {viewStock? "Stock" : "Back"}
          </Button>
          <Button className="modalBtn ms-3" onClick={() => handlerOnClick()}>
            Close
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalProductDetails;

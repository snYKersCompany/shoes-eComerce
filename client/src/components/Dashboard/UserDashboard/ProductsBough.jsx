import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";

import InputChangeRating from "../../StarsReview/InputChangeRating";
import StarsReview from "../../StarsReview/StarsReview";

import { postReview } from "../../../redux/features/reviews/reviewsActions";

const ProductsBought = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userDashboard, user } = useSelector((state) => state.users);
  const captureUserName = userDashboard.name;
  const { orders } = useSelector((state) => state.orders);

  const [avgRating, setAvgRating] = useState(0);
  const [reviewInput, setReviewInput] = useState("");

  const [idSingleProduct, setIdSingleProduct] = useState();

  const [moveToReview, setMoveToReview] = useState(false);

  const userPurchases = orders.map((e) => e.products).flat();

  const handlerInputReview = (e) => {
    setReviewInput({
      ...reviewInput,
      [e.target.inputReview]: e.target.value,
    });
  };

  //rating handler
  const handleRating = (input) => {
    setAvgRating(input);
  };
  //end of rating handler

  //ACTION DE POST REVIEW
  const sendPostReview = (e) => {
    e.preventDefault();
    dispatch(
      postReview({
        _idProduct: idSingleProduct,
        _idUser: user,
        rating: avgRating,
        description: Object.values(reviewInput).toString(),
      })
    );
  };

  const toProductReview = (e, id) => {
    console.log("entro");
    e.preventDefault();
    setAvgRating(0);
    setIdSingleProduct(id);
    console.log("esto es el id del prod", id);
    setMoveToReview(true);
    navigate("/account/bought");
  };

  const backToProdBought = (e) => {
    e.preventDefault();
    setMoveToReview(false);
  };

  return moveToReview === false ? (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>name</th>
            <th>quantity</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {userPurchases &&
            userPurchases.map((prd, inx) => (
              <tr key={inx}>
                <td>{prd.name}</td>
                <td>{prd.count}</td>
                <td>{prd.price}</td>
                <td>
                  <Button onClick={(e) => toProductReview(e, prd.id)}>
                    make your review
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  ) : (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Make your review!</Modal.Title>
        </Modal.Header>
        {/* body pas cribi */}
        <Modal.Body>
          <>
            <FloatingLabel controlId="floatingTextarea" className="mb-3">
              {captureUserName}
            </FloatingLabel>
            <InputChangeRating rating={avgRating} handleRating={handleRating} />
            <StarsReview stars={avgRating} />
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
                name="reviewInput"
                onChange={(e) => handlerInputReview(e)}
              />
            </FloatingLabel>
          </>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={(e) => sendPostReview(e)}>
            send review
          </Button>
          <Button variant="secondary" onClick={(e) => backToProdBought(e)}>
            back
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default ProductsBought;

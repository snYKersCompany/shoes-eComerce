import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";

import InputChangeRating from "../../StarsReview/InputChangeRating";
import StarsReview from "../../StarsReview/StarsReview";

import { postReview } from "../../../redux/features/reviews/reviewsActions";

const ProductsBought = () => {
  const dispatch = useDispatch();
  const { userDashboard, user } = useSelector((state) => state.users);
  const captureUserName = userDashboard.name;
  const {orders} = useSelector(state => state.orders)
  const [avgRating, setAvgRating] = useState(0);
  const [reviewInput, setReviewInput] = useState("");
  const [idSingleProduct, setIdSingleProduct] = useState();




    console.log('esto es orders en ProductsBought',orders)

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




  return (
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
          <Button variant="secondary" onClick={(e) => e}>
            back
          </Button>
          <Button variant="primary" onClick={(e) => sendPostReview(e)}>
            send review
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default ProductsBought;

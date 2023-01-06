import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postReview } from "../../../redux/features/reviews/reviewsActions";
import StarsReview from "../../StarsReview/StarsReview";
import InputChangeRating from "../../StarsReview/InputChangeRating";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import "../../../styles/review.css";

const UserOrders = () => {
  const dispatch = useDispatch();

  const { userDashboard, user } = useSelector((state) => state.users);
  const { orders } = useSelector((state) => state.orders);

  const [actualOrderProducts, setActualOrderProducts] = useState();

  // states to travel through tabs
  const [toOrderDetail, setToOrderDetail] = useState(false);
  const [toReview, setToReview] = useState(false);

  //to handle inputs
  const [reviewInput, setReviewInput] = useState("");
  const [avgRating, setAvgRating] = useState(0);
  //fill w single product id
  const [idSingleProduct, setIdSingleProduct] = useState();

  //conseguimos todas las ordenes del usuario
  const captureUserName = userDashboard.name;
  const userOrders = orders.filter((e) => e.user.uid === userDashboard._id);

  //handlers to travel and set states
  const toPurchaseDetails = (e, prod) => {
    e.preventDefault();
    setActualOrderProducts(prod);
    setToOrderDetail(true);
  };

  const toProductReview = (e, idOneProduct) => {
    e.preventDefault();
    setAvgRating(0);
    setIdSingleProduct(idOneProduct);
    setToReview(true);
  };

  const backToOrderDetails = (e) => {
    e.preventDefault();
    setToReview(false);
  };

  const backToOrders = (e) => {
    e.preventDefault();
    setToOrderDetail(false);
  };
  //end of handlers to travel and set states

  //rating handler
  const handleRating = (input) => {
    setAvgRating(input);
  };
  //end of rating handler

  const handlerInputReview = (e) => {
    setReviewInput({
      ...reviewInput,
      [e.target.inputReview]: e.target.value,
    });
  };

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

  //aca estamos en las ordenes
  return toOrderDetail === false ? (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>date</th>
          <th>status</th>
          <th>ticket</th>
          <th>price</th>
        </tr>
      </thead>
      <tbody>
        {userOrders &&
          userOrders.map((prd, inx) => (
            <tr key={inx}>
              <td>{prd._id}</td>
              <td>{prd.date}</td>
              <td>{prd.state}</td>
              <td>{prd.ticket ? prd.ticket : "nothing"}</td>
              <td>{prd.finalAmount}</td>
              <td>
                <Button onClick={(e) => toPurchaseDetails(e, prd.products)}>
                  detail
                </Button>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  ) : //aca estamos en los productos de cada orden
  toReview === false ? (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>name</th>
          <th>quantity</th>
          <th>price</th>
        </tr>
      </thead>
      <tbody>
        {actualOrderProducts &&
          actualOrderProducts.map((prd, inx) => (
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
        <tr>
          <td>
            <Button onClick={(e) => backToOrders(e)}>Back</Button>
          </td>
        </tr>
      </tbody>
    </Table>
  ) : (
    //aca estamos en la review de cada producto de cada orden de compra
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
          <Button variant="secondary" onClick={(e) => backToOrderDetails(e)}>
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

export default UserOrders;

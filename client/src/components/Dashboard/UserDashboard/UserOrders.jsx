import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import { CiFilter } from "react-icons/ci";


import Button from "react-bootstrap/esm/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";

import "../../../styles/review.css";
import "../../../styles/ordersAdminDashboard.css"

import { purchasesMade, product, paproba } from "./pruebas";
import { postReview } from "../../../redux/features/reviews/reviewsActions";

import StarsReview from "../../StarsReview/StarsReview";
import InputChangeRating from "../../StarsReview/InputChangeRating";

const UserOrders = () => {
  const dispatch = useDispatch();
  const { userDashboard, user } = useSelector((state) => state.users);
  const { id } = useParams();

  //para manejarnos entre los tabs
  const [toOrderDetail, setToOrderDetail] = useState(false);
  const [toReview, setToReview] = useState(false);

  //para manejar el input
  const [reviewInput, setReviewInput] = useState("");

  // console.log("esto es id", id);

  const captureUserName = userDashboard.name;

  //PARA NAVEGAR
  const toPurchaseDetails = (e) => {
    e.preventDefault();
    setToOrderDetail(true);
  };

  const toProductReview = (e) => {
    e.preventDefault();
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
  //TERMINA PARA NAVEGAR




  //ESTRELLLLITASSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS

  const [avgRating, setAvgRating] = useState(0);

  const handleRating = (input) => {
    setAvgRating(input);
  };

  const handlerInputReview = (e) => {
    setReviewInput({
      ...reviewInput,
      [e.target.inputReview]: e.target.value,
    });
  };
  // console.log('esto es avgRating, las estrellitas esas hermosas pero robadas', avgRating)

  //TERMINAN LAS ESTRELLITAS



  //ACTION DE POST REVIEW
  const paraMandarAlBack = (e) => {
    e.preventDefault();
    dispatch(
      postReview({
        _idProduct: paproba._id,
        _idUser: user,
        rating: avgRating,
        description: Object.values(reviewInput).toString(),
      })
    );
  };
  // console.log(
  //   "esto es y reviewInput en el comp",
  //   Object.values(reviewInput).toString()
  // );


  //color de la orden según el estado de la compra
 const functionColor = (state) => {
  state= state.toLowerCase()
    switch (state) {
      case "completed":
        return "linear-gradient(318deg, rgba(185,255,186,1) 52%, rgba(0,0,0,1) 100%)";
      case "pending":
        return "linear-gradient(318deg, rgba(255,246,185,1) 52%, rgba(0,0,0,1) 100%)";
      case "cancelled":
        return "linear-gradient(318deg, rgba(245,172,172,1) 52%, rgba(0,0,0,1) 100%)";
      default:
        return "#ffffff";
    }
  };

  console.log(product)

  
  //aca estamos en las ordenes
  return toOrderDetail === false ? (
    <div className="userDashboard-userProfileGrid">
     <div className="userDashboard-userProfilefilters">
        <button className="d-flex align-items-center">
          <span style={{ color: "white", fontSize: "1.2rem"}} className={"fw-light"}>
            Filters
          </span>
          <CiFilter />
        </button>
      </div>

        {product &&
          product.map((order,i) => (
            <div
              key={i}
              className="userDashboard-userProfileOrders"
              style={{ background: functionColor(order.status) }}
            >
              <div className="userDashboard-userProfile">
                <img
                  src={`${
                    order?.user?.image
                      ? order.user.image
                      : "https://jonmircha.com/img/jonmircha.jpg"
                    //https://jonmircha.com/img/jonmircha.jpg
                  }`}
                  alt="order-user"
                  width={"150px"}
                />
              <label className="fw-light" key={order.id}>
                  {order.id}
                </label>
              </div>

              <div className="userDashboard-orderInfo">
                <p key={i + "user"} className="fw-bold orderInfo1">
                  {" "}
                  {order?.user?.username ? order.user.username : "prueba"}
                </p>
                <p className="orderInfo2" key={order.date}>
                  {order?.date.slice(0, 10)}
                </p>
                <p className="fst-italic orderInfo3" key={order.state}>
                  {order?.status}
                </p>
                <p className="fw-bold orderInfo4" key={i + "amount"}>
                  ${order?.finalAmount ? order.finalAmount : "123"}
                </p>
              </div>


              <button onClick={(e) => toPurchaseDetails(e)} className={"btnControllers1"}>
               <BiSearchAlt2 />

              </button>
            </div>
          ))}
    </div>
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
        {
          <tr>
            <td>{paproba.name}</td>
            <td>{paproba.quantity}</td> {/*esto es del ticket */}
            <td>{paproba.price}</td>
            <Button onClick={(e) => toProductReview(e)}>
              make your review
            </Button>
          </tr>
        }
        <Button onClick={(e) => backToOrders(e)}>Back</Button>
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

        {/*final pas cribi */}

        <Modal.Footer>
          <Button variant="secondary" onClick={(e) => backToOrderDetails(e)}>
            back
          </Button>
          <Button variant="primary" onClick={(e) => paraMandarAlBack(e)}>
            send review
          </Button>
          {/* <button type='submit' onSubmit={(e) => paraMandarAlBack(e)}>a ver</button> */}
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default UserOrders;

// {
//   "_idProduct": "63972933f60a0fb9ec9dfe43",
//   "_idUser": "JNOwwnsTwYOT8iZHHjDRjxJ5NGv2",
//   "rating": 4,
//   "description": "Esto es una descripcion de ejemplo",
//   "_id": "63a1e60282b0ade5260462d4"
// }

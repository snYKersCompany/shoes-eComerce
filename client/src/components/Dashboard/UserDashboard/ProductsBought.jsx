import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postReview } from "../../../redux/features/reviews/reviewsActions";
import StarsReview from "../../StarsReview/StarsReview";
import InputChangeRating from "../../StarsReview/InputChangeRating";

import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/esm/Button";
import NoFavourites from "./NoFavourites";
import Form from "react-bootstrap/Form";
import "../../../styles/ProductBought.css";

const ProductsBought = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userDashboard, user } = useSelector((state) => state.users);
  const captureUserName = userDashboard.name;
  const { orders } = useSelector((state) => state.orders);

  
  const leyend = "With your first purchase you can add a review to the product."




  const [avgRating, setAvgRating] = useState(0);
  const [reviewInput, setReviewInput] = useState("");

  const [idSingleProduct, setIdSingleProduct] = useState();

  const [moveToReview, setMoveToReview] = useState(false);


  const userPurchases = orders
    .filter((e) => e.state === "aprobed")
    .map((e) => e.products)
    .flat();

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
    navigate("/account");
  };

  const toProductReview = (e, id) => {
    // console.log("entro");
    e.preventDefault();
    setAvgRating(0);
    setIdSingleProduct(id);
    // console.log("esto es el id del prod", id);
    setMoveToReview(true);
    navigate("/account/bought");
  };

  const backToProdBought = (e) => {
    e.preventDefault();
    setMoveToReview(false);
  };

  return moveToReview === false ? (
    <div className="ProductBougth-container">
      {userPurchases.length ?
        userPurchases.map((prd, i) => (
          <div key={i} className="ProductBougth-card">
            <div className="ProductBougth-card-img">
              <img src={prd.img} alt={prd.name} />
            </div>
            <p className="ProductBougth-card-name">{prd.name}</p>
            <button
              className="ProductBougth-btn btnCard1"
              onClick={(e) => toProductReview(e, prd.id)}
            >
              make your review
            </button>
          </div>
        ))
       
      : <div className="alertFavoritesCards">
      <NoFavourites leyend = {leyend}/>
      </div>
    }
        
    </div>
  )  : (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <div className="ModalContainerPB">
        <Modal.Dialog>
          <div className="ModalContainerPB-header">
            <Modal.Header>
              <Modal.Title>Make your review!</Modal.Title>
            </Modal.Header>
          </div>
          {/* body pas cribi */}
          <div className="ModalContainerPB-body">
            <Modal.Body>
              <InputChangeRating
                rating={avgRating}
                handleRating={handleRating}
              />
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
              <FloatingLabel controlId="floatingTextarea" className="mb-3">
                {captureUserName}
              </FloatingLabel>
            </Modal.Body>
          </div>

          <div className="ModalContainerPB-footer">
            <Modal.Footer>
              <button
                className="btnCard1 makeBtnReview"
                onClick={(e) => sendPostReview(e)}
              >
                send review
              </button>
              <Button variant="secondary" onClick={(e) => backToProdBought(e)}>
                back
              </Button>
            </Modal.Footer>
          </div>
        </Modal.Dialog>
      </div>
    </div>
  );
};

export default ProductsBought;

import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";
import { useDispatch } from "react-redux";
import "../../../../styles/modalProductsWarning.css";
import { deleteUser } from "../../../../redux/features/users/usersActions";
import { useAuth } from "../../../../context/authContext";

import { putUserDeleted } from "../../../../redux/features/nodemailer/nodeMailerActions";
import { deleteReviewUser } from "../../../../redux/features/reviews/reviewsActions";

const ModalUsersWarning = (props) => {
  const dispatch = useDispatch();

  const { deleteUserFB, user } = useAuth();
  const handlerOnClick = () => {
    const orderName = Object.keys(props.order)[0];
    const orderSearch = {};

    console.log(props)

    if (orderName.length) orderSearch.orderBy = props.order;
    if (props.search.length) orderSearch.search = props.search;
    dispatch(deleteUser(props.show, orderSearch));
    deleteUserFB(user);
    if(props.reviews.length) dispatch(deleteReviewUser(props.show, props.reviews))
    alert(`Inserte Accion para eliminar el User ${props.show}`);

    // dispatch(putUserDeleted(props.email));
    // props.onEmail();
    props.onHide();
  };

  const handlerCancel = () => {
    // props.onEmail();
    props.onHide();
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="d-flex justify-content-center asjdnasidjniasud"
    >
      <Modal.Header className="header d-flex">
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="d-flex justify-content-center w-100"
        >
          <h3>Are you sure?</h3>
        </Modal.Title>
      </Modal.Header>

      <div className="d-flex ">
        <Modal.Body className="d-flex">
          <Button className="bg-success me-5" onClick={() => handlerCancel()}>
            Cancel
          </Button>
          <Button className="bg-danger" onClick={() => handlerOnClick()}>
            Delete
          </Button>
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default ModalUsersWarning;

import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProducts,
  getAllProducts,
} from "../../../../redux/features/products/productsActions";
import "../../../../styles/modalProductsWarning.css";
import { deleteUser } from "../../../../redux/features/users/usersActions";
import { useAuth } from "../../../../context/authContext";

const ModalUsersWarning = (props) => {
  const dispatch = useDispatch();

  const { deleteUserFB, user } = useAuth();
  const handlerOnClick = () => {
    const orderName = Object.keys(props.order)[0];
    const orderSearch = {};

    if (orderName.length) orderSearch.orderBy = props.order;
    if (props.search.length) orderSearch.search = props.search;
    dispatch(deleteUser(props.show, orderSearch));
    deleteUserFB(user);

    alert(`Inserte Accion para eliminar el User ${props.show}`);

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
          <Button className="bg-success me-5" onClick={() => props.onHide()}>
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

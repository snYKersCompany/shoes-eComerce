import { useDispatch, useSelector } from "react-redux";  // eslint-disable-line
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { Link } from 'react-router-dom'
import PaymentForm from "./PaymentForm";
import { pGbrand } from '../../utils/helpfulLinks'
import { totalPrice } from '../../utils/utilFunctions'
import { total } from '../../utils/utilFunctions/index'  // eslint-disable-line





//HARDCODING
const sneakers = [
  {
    "name": "Air Jordan",
    "price": 16000,
  },
  {
    "name": "Air Jordan",
    "price": 16000,
  },
  {
    "name": "Air Jordan",
    "price": 22000,

  },
]



//para conseguir el producto, tenemos que ingresar al state del carrito
//y aplicar un map
//para la transaction podemos usar un "numero" del back?
//para la purchase_state tenemos que mapear el array y buscar la propiedad "done" o "failed"
//para la suma de las zapas ya hay un método en '../../utils/utilFunctions'
//la brand ya la esta tomando


const trolley = {
  userName: 'carlos',
  transactionId: '54487',
  purchase_state:  'done',
  moneyWasted: totalPrice(sneakers),
  brand: pGbrand,

}


const PaymentStatus = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return trolley && trolley.purchase_state === 'done'

    ?
    (
      <>
        <Button variant="primary" onClick={handleShow}>
          terminan de pagar...
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Thanks for your purchase!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <PaymentForm userName={trolley.userName} transactionId={trolley.transactionId} moneyWasted={trolley.moneyWasted} brand={trolley.brand} purchase_state={trolley.purchase_state} />
          </Modal.Body>
          <Modal.Footer>
            <Link to='/home'>
              <Button variant="primary" onClick={handleClose}>
                back to home
              </Button>
            </Link>
          </Modal.Footer>
        </Modal>
      </>
    )
    :
    (
      <>
        <Button variant="primary" onClick={handleShow}>
          terminan de pagar...
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Upps! we found a problem!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Your purchase was denied, try again please
          </Modal.Body>
          <Modal.Footer>
            <Link to='/home'>
              <Button variant="primary" onClick={handleClose}>
                back to home
              </Button>
            </Link>
          </Modal.Footer>
        </Modal>
      </>

    )
}
export default PaymentStatus;
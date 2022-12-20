import React, {useState} from "react";



import Button from "react-bootstrap/esm/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Table from 'react-bootstrap/Table';


import Modal from "react-bootstrap/Modal";


import "../../../styles/review.css";
import Review from "./Review";



const UserOrders = () => {

  const [toOrderDetail, setToOrderDetail] = useState(false)
  const [toReview, setToReview] = useState(false)


  const toPurchaseDetails = (e) => { 
    e.preventDefault()
    setToOrderDetail(true);
  }

  const toProductReview = (e) => {
    e.preventDefault();
    setToReview(true)
  }

  const backToOrderDetails = (e) => {
    e.preventDefault();
    setToReview(false)
  }

  const backToOrders = (e) => {
    e.preventDefault();
    setToOrderDetail(false)
  }


  const product = [ //cada una de estas compras va a tener uno a varios productos vendidos y 
    {                 //dentro de cada una va a aparecer un purchasesMade=[]
      id: "12asd31asd23",
      date: "14/12/20",
      status: 'COMPLETED',
      ticket: 'HAND MADE',
      price: 89

    },
    {
      id: "12asd31asd23",
      date: "14/13/20",
      status: 'COMPLETED',
      ticket: 'HAND MADE',
      price: 80
    },
    {
      id: "12asd31asd23",
      date: "14/12/19",
      status: 'COMPLETED',
      ticket: 'HAND MADE',
      price: 189
    },
    {
      id: "12asd31asd23",
      date: "14/12/22",
      status: 'COMPLETED',
      ticket: 'HAND MADE',
      price: 88
    },
  ]

  const purchasesMade = [  //
    {
      name: 'Nike Turbo 2.0',
      quantity: '1',
      price: 'usd 900'
    },
    {
      name: 'Nike Turbo 3.0',
      quantity: '33',
      price: 'usd 1200'
    },
    {
      name: 'Nike Turbo 4.0',
      quantity: '5',
      price: 'usd 2200'
    },
    {
      name: 'Nike Turbo 5.0',
      quantity: '10',
      price: 'usd 3200'
    },
    {
      name: 'Nike Turbo 10.0',
      quantity: '3',
      price: 'usd 4200'
    },
  ]



  return toOrderDetail === false ? (
    <Table striped bordered hover>

      <thead>
        <tr>
          <th key='thid'>ID</th>
          <th key='thdate'>date</th>
          <th key='thstatus'>status</th>
          <th key='thcomprobante'>ticket</th>
          <th key='thprice'>price</th>
        </tr>
      </thead>
      <tbody>
        
        {product&&product.map(e=>(
          
          <tr>
          <td key='id'>{e.id}</td>
          <td key='date'>{e.date}</td>
          <td key='status'>{e.status}</td>
          <td key='ticket'>{e.ticket}</td>
          <td key='price'>{e.price}</td>
          <Button onClick={(e) => toPurchaseDetails(e)}>detail</Button>
          </tr>
        ))}

      </tbody>

    </Table>
  ) : toReview === false ?(
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
        purchasesMade && purchasesMade.map(e=> (
          <tr>
            <td>{e.name}</td>
            <td>{e.quantity}</td>
            <td>{e.price}</td>
            <Button onClick={(e) => toProductReview(e)}>make your review</Button>
          </tr>
        ))
      }
      <Button onClick={e=> backToOrders(e)}>Back</Button>
    </tbody>
  </Table>
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
            <FloatingLabel
              controlId="floatingTextarea"
              label="Your name"
              className="mb-3"
            >
              <Form.Control as="textarea" placeholder="Leave a comment here" />
            </FloatingLabel>

            <FloatingLabel controlId="floatingTextarea2" label="Comments">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
          </>
        </Modal.Body>

        {/*final pas cribi */}
        

        <Modal.Footer>
          <Button variant="secondary" onClick={e=> backToOrderDetails(e) }>back</Button>
          <Button variant="primary">send review</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  )
};

export default UserOrders;


// {
//   "_idProduct": "63972933f60a0fb9ec9dfe43",
//   "_idUser": "JNOwwnsTwYOT8iZHHjDRjxJ5NGv2",
//   "rating": 4,
//   "description": "Esto es una descripcion de ejemplo",
//   "_id": "63a1e60282b0ade5260462d4"
// }


{/* <tr>
<td>1</td>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
</tr>
<tr>
<td>2</td>
<td>Jacob</td>
<td>Thornton</td>
<td>@fat</td>
</tr>
<tr>
<td>3</td>
<td colSpan={2}>Larry the Bird</td>
<td>@twitter</td>
</tr> */}




{/* <>
    <div className="">
      <FloatingLabel
        controlId="floatingTextarea"
        label="Comments"
        className="mb-3"
      >
        <Form.Control as="textarea" placeholder="Leave a comment here" />
      </FloatingLabel>

      <FloatingLabel controlId="floatingTextarea2" label="Comments">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: "100px" }}
        />
      </FloatingLabel>
    </div>
  </> */}
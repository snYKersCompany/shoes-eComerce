import React, { useState } from "react";
import { useSelector } from "react-redux";

import Button from "react-bootstrap/esm/Button";
import Table from "react-bootstrap/Table";

import "../../../styles/review.css";

const UserOrders = () => {
  const { orders } = useSelector((state) => state.orders);

  const [actualOrderProducts, setActualOrderProducts] = useState();

  // states to travel through tabs
  const [toOrderDetail, setToOrderDetail] = useState(false);

  //handlers to travel and set states
  const toPurchaseDetails = (e, prod) => {
    e.preventDefault();
    setActualOrderProducts(prod); // 1 single purchase w/ their products
    setToOrderDetail(true);
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
  // console.log(
  //   "esto es y reviewInput en el comp",
  //   Object.values(reviewInput).toString()
  // );

  //conseguimos los productos de esa orden
  const productsBought = orders.map((e) => e.products).flat();
  


  //color de la orden según el estado de la compra
 const functionColor = (state) => {
  state= state.toLowerCase()
    switch (state) {
      case "aprobed":
        return "linear-gradient(318deg, rgba(185,255,186,1) 52%, rgba(0,0,0,1) 100%)";
      case "pending":
        return "linear-gradient(318deg, rgba(255,246,185,1) 52%, rgba(0,0,0,1) 100%)";
      case "cancelled":
        return "linear-gradient(318deg, rgba(245,172,172,1) 52%, rgba(0,0,0,1) 100%)";
      case "rejected":
      return "linear-gradient(318deg, rgba(245,172,172,1) 52%, rgba(0,0,0,1) 100%)";
      default:
        return "#ffffff";
    }
  };


  //agregar que se pueda postear solamente en las que tengan el estado de "aproved"
  //podria llenar un estado con los valores que le llegan del array, si entra en la factura [0] que le llegue esa info y
  //llene el estado, si entra en la factura en la position [1] que se llene el estado con la info  en de esa factura
  //en el onclick que matchee con el id de la compra y ahi mapea la tabla de products: captura el id en el evento y mapeas dentro de userOrders

  //en el onclick de userORders se ouede llenar un estado con los products que coincidan con el id capturado.


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
        {orders &&
          orders.map((prd, inx) => (
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
  ) : (
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
            </tr>
          ))}
        <tr>
          <td>
            <Button onClick={(e) => backToOrders(e)}>Back</Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default UserOrders;
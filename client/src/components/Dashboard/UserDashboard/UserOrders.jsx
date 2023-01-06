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

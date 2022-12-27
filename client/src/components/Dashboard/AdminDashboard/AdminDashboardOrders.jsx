import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllOrders,
  getOrderDetails,
} from "../../../redux/features/orders/ordersActions";
import  OrderDate  from './ordersAndfilters/Sequence'
import { PDFViewer } from "@react-pdf/renderer";
import DocPDF from "./DocPDF";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

function AdminDashboardOrders({ setOrderDetails }) {
  const dispatch = useDispatch();
  const [viewPdf, setViewPdf] = useState(true);
  const { orders, orderDetails } = useSelector((state) => state.orders);


  // console.log('esto es orders', orders)
  // console.log('esto es orderDetail', orderDetails)


  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  const handlerViewPdf = ({ _id }) => {
    dispatch(getOrderDetails(_id));
    setViewPdf(!viewPdf);
  };

  const handlerDetails = (id) => {
    dispatch(getOrderDetails(id));
    setOrderDetails();
  };

  const handlerButon = () => {
    setViewPdf(!viewPdf);
  };
  return (
    <>
    <OrderDate/>
      {viewPdf ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>User</th>
              <th>Date</th>
              <th>Final purchase amount</th>
              <th>Status</th>
              <th>voucher</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, i) => (
              <tr key={i}>
                <td>{order._id}</td>
                <td>user</td>
                <td>{order.date}</td>
                <td>$ {order.finalAmount ? order.finalAmount : order.totalPrice}</td>
                <td>{order.state}</td>
                <td>
                  <Button
                    variant="primary"
                    onClick={() => {
                      handlerViewPdf(order);
                    }}
                  >
                    Ticket
                  </Button>
                </td>
                <td>
                  <Button
                    variant="primary"
                    onClick={() => {
                      handlerDetails(order._id);
                    }}
                  >
                    Details
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <>
          <Button variant="primary" onClick={handlerButon}>
            Back
          </Button>
          <PDFViewer style={{ width: "90vw", height: "90vh" }}>
            {orderDetails ? <DocPDF orderDetails={orderDetails} /> : null}
          </PDFViewer>
        </>
      )}
    </>
  );
}

export default AdminDashboardOrders;

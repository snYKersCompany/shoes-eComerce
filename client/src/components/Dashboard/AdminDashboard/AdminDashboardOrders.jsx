import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllOrders,
  getOrderDetails,
} from "../../../redux/features/orders/ordersActions";
import { PDFViewer } from "@react-pdf/renderer";
import DocPDF from "./DocPDF";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

function AdminDashboardOrders({ setOrderDetails }) {
  const dispatch = useDispatch();
  const [viewPdf, setViewPdf] = useState(true);
  const { orders, orderDetails } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  const handlerViewPdf = ({ _id }) => {
    dispatch(getOrderDetails(_id));
    setViewPdf(!viewPdf);
  };

  const handlerDetails = () => {
    setOrderDetails();
  };

  const handlerButon = () => {
    setViewPdf(!viewPdf);
  };
  return (
    <>
      {viewPdf ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>_id</th>
              <th>User</th>
              <th>Date</th>
              <th>Status</th>
              <th>voucher</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, i) => (
              <tr key={i}>
                <td>{order._id}</td>
                <td>User</td>
                <td>{order.date}</td>
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
                      handlerDetails();
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

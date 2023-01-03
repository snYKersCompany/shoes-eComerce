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


  // console.log('esto es orders', orders)
  // console.log('esto es orderDetail', orderDetails)
  const [sortOrder, setSortOrder] = useState('');
  const [valueOrder, setValueOrder] = useState(-1);
  const [sortDirection, setSortDirection] = useState("↑↓")



  useEffect(() => {
    const sort = {};

    if(sortOrder.length) sort.orderBy = {[sortOrder]:valueOrder}
    console.log('en el comp AdmDashBOrders', sort)


    dispatch(getAllOrders(sort));
  }, [dispatch, sortOrder, valueOrder]);

  const handleSortOrders = (column)=>{
    setSortOrder(column);
    setValueOrder(valueOrder * -1)
    if(valueOrder > 0) setSortDirection("↑")
    else setSortDirection("↓")
  };








  const handlerViewPdf = ({ _id }) => {
    console.log(_id)
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

  console.log(orders)

  return (
    <>
      {viewPdf ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th onClick={()=> handleSortOrders('username')}>User {sortOrder==="username"?sortDirection:""}</th>
              <th onClick={()=> handleSortOrders('date')}>Date {sortOrder==="date"?sortDirection:""}</th>
              <th onClick={()=> handleSortOrders('finalAmout')}>Final purchase amount {sortOrder==="finalAmout"?sortDirection:""}</th>
              <th onClick={()=> handleSortOrders('state')}>State {sortOrder==="state"?sortDirection:""}</th>
              <th>voucher</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, i) => (
              <tr key={i}>
                <td key={order._id}>{order._id}</td>
                <td key={i+"user"}>{order.user ? order.user.username : 'user'}</td>
                <td key={order.date}>{order.date}</td>
                <td key={i+'amount'}>{order.finalAmout ? order.finalAmout : order.totalPrice}</td>
                <td key={order.state}>{order.state}</td>
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

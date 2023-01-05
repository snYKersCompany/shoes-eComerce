import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllOrders,
  getOrderDetails,
} from "../../../redux/features/orders/ordersActions";
import { PDFViewer } from "@react-pdf/renderer";
import DocPDF from "./DocPDF";
import {BiSearchAlt2} from "react-icons/bi"
import {BsFileEarmarkArrowDown} from "react-icons/bs"
import {CiFilter} from "react-icons/ci"
import "../../../styles/AdminDashboardOrders.css"




function AdminDashboardOrders({ setOrderDetails }) {
  const dispatch = useDispatch();
  const [viewPdf, setViewPdf] = useState(true);
  
  const { orders, orderDetails } = useSelector((state) => state.orders);


  console.log('esto es orders', orders)

  const [sortOrder, setSortOrder] = useState('');
  const [valueOrder, setValueOrder] = useState(-1);
  const [sortDirection, setSortDirection] = useState("↑↓")



  useEffect(() => {
    const sort = {};

    if(sortOrder.length) sort.orderBy = {[sortOrder]:valueOrder}


    dispatch(getAllOrders(sort));
  }, [dispatch, sortOrder, valueOrder]);

  const handleSortOrders = (column)=>{
    setSortOrder(column);
    setValueOrder(valueOrder * -1)
    if(valueOrder > 0) setSortDirection("↑")
    else setSortDirection("↓")
  };








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

  const functionColor = (state) =>{
    switch (state) {
      case "cancelled":
          return "#FFA0A0"
      case "cancelled":
        return "#FFA0A0"
      case "pending":
        return "#FFDE69"
      case "aprobed":
        return "#B5FFB8"
      default:
        return "#ffffff"
    }
  }

  return (
    <div style={{"background":"rgb(36,36,36)"}}>
      {viewPdf ? (
        <>
        <div className="AdminDashboard-userProfileGrid">
          
          <div className="AdminDashboard-userProfilefilters">
              <button className="d-flex align-items-center">
                <span style={{"color": "white", "font-size": "1rem"}}>filter</span>
                <CiFilter/>
              </button>
          </div>

            {orders.map((order, i) => (
              <div key={i} className="AdminDashboard-userProfileOrders" style={{"background-color" : functionColor(order.state)}}>
               
                <div className="AdminDashboard-userProfile">
                  <img src={`${order?.user?.image? order.user.image :"https://jonmircha.com/img/jonmircha.jpg" }`} alt="order-user" width={"150px"} />
                  <label className="fw-light" key={order._id}>{order._id}</label>
                </div>
                
                <div className="AdminDashboard-orderInfo">
                    <p key={i+"user"} className="fw-bold">  {order?.user?.username ? order.user.username : 'prueba'}</p>
                    <p key={order.date}>{order?.date.slice(0,10)}</p>
                    <p className="fst-italic" key={order.state}>{order?.state}</p>
                    <p className="fw-bold" key={i+'amount'}>{order?.finalAmount ? order.finalAmount : "$123"}</p>
                </div>

                <div  className="AdminDashboard-btnControllers">
                    <button
                    className="btnControllers-AdminDsh"
                      onClick={() => {
                        handlerViewPdf(order);
                      }}
                    >
                      <BsFileEarmarkArrowDown />
                    </button>
                  
                    <button
                      onClick={() => {
                        handlerDetails(order._id);
                      }}
                      className="btnControllers-AdminDsh"
                    >
                      <BiSearchAlt2 />
                    </button>
                </div>
              
              </div>
            ))}

      </div>
        

      </>

      ) : (
        <>
          <button variant="primary" onClick={handlerButon}>
            Back
          </button>
          <PDFViewer style={{ width: "90vw", height: "90vh" }}>
            {orderDetails ? <DocPDF orderDetails={orderDetails} /> : null}
          </PDFViewer>
        </>
      )}
    </div>
  );
}

export default AdminDashboardOrders;

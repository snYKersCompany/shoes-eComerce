import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RiSearchFill } from "react-icons/ri";
import {IoMdArrowRoundBack} from "react-icons/io"

import "../../../styles/AdminDashboardOrders.css";

const UserOrders = () => {
  const { orders } = useSelector((state) => state.orders);

  const [actualOrderProducts, setActualOrderProducts] = useState();

  // states to travel through tabs
  const [toOrderDetail, setToOrderDetail] = useState(false);
  const [toReview, setToReview] = useState(false);

  //conseguimos todas las ordenes del usuario

  //handlers to travel and set states
  const toPurchaseDetails = (e, prod) => {
    e.preventDefault();
    setActualOrderProducts(prod);
    setToOrderDetail(true);
  };

  const backToOrders = (e) => {
    e.preventDefault();
    setToOrderDetail(false);
  };
  //end of handlers to travel and set states

  const functionColor = (state) => {
    switch (state) {
      case "cancelled":
        return "#F5234D";
      case "pending":
        return "yellow";
      case "aprobed":
        return "greenyellow";
      default:
        return "#ffffff";
    }
  };

  //aca estamos en las ordenes
  return toOrderDetail === false ? (
    <div style={{ background: "rgb(36,36,36)" }}>
      <div className="AdminDashboard-userProfileGrid">
        <div className="AdminDashboard-userProfilefilters">
          {/* <button className="d-flex align-items-center">
                <span style={{"color": "white", "font-size": "1rem"}}>sin filtros</span>
                <CiFilter/>
              </button> */}
        </div>

        {orders &&
          orders.map((order, i) => (
            <div
              key={i}
              className="AdminDashboard-userProfileOrders"
              style={{ backgroundColor: "#252733" }}
            >
              <div className="AdminDashboard-userProfile">
                <img
                  src={`${
                    order?.user?.image
                      ? order.user.image
                      : "https://cdn-icons-png.flaticon.com/512/25/25634.png"
                  }`}
                  alt="order-user"
                />
                <label className="AD-orderInfo-id" key={order._id}>
                  {order._id}
                </label>
              </div>

              <div className="AdminDashboard-orderInfo">
                <p key={i + "user"} className="AD-orderInfo-name">
                  {" "}
                  {order?.user?.username ? order.user.username : "prueba"}
                </p>
                <p key={order.date}>{order?.date.slice(0, 10)}</p>
                <p
                  className="fst-italic"
                  style={{ color: functionColor(order.state) }}
                  key={order.state}
                >
                  {order?.state}
                </p>
              </div>

              <div className="AdminDashboard-orderPrice">
                <p className="fw-bold" key={i + "amount"}>
                  ${order.finalAmount || "$00"}
                </p>
              </div>

              <div className="AdminDashboard-btnControllers">
                <button
                  className="btnControllers-AdminDsh"
                  onClick={(e) => toPurchaseDetails(e, order.products)}
                >
                  {/* <BiSearchAlt2 /> */}
                  <RiSearchFill />
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  ) : (
    //aca estamos en los productos de cada orden

    <div className="ContainerOrderDetails">
      <div className="buttonOrderDetails">
        <button className="btnCard1" onClick={(e) => backToOrders(e)}>
          <span className="text-btn-OrderDetails">
            <IoMdArrowRoundBack/> Back
          </span>
        </button>
      </div>

      {actualOrderProducts &&
        actualOrderProducts.map((prd, inx) => (
          // console.log(prd)

          <div className=" CardContainerOrderDetails">
            
                <div className="ImageOrderDetails">
                  <div className="imgCardOrderDetails">
                    <img src={prd.img} alt={prd.name}  />
                  </div>
                  <p className="IDCardOrderDetails">{prd.id}</p>
                </div>

                <div className="InfoOrderDetails">
                  <h3>{prd.name}</h3>
                </div>

                <div className="QuantityOrderDetails">
                    <p>Count: {prd.count}</p>
                    <p className="fw-bold"> Total Price: ${prd.totalPrice}</p>
                </div>
          </div>
        
        ))}

      
    </div>
  );
};

export default UserOrders;

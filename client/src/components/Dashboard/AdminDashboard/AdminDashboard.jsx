import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

import AdminDashboardOrders from "./AdminDashboardOrders";
import AdminDashboardProducts from "./AdminDashboardProducts";
import AdminDashboardUsers from "./AdminDashboardUsers";
import AdminDashboardAccount from "./AdminDashboardAccount";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { CgUserList, CgHeart, CgList } from "react-icons/cg";
import "../../../styles/userDashboard.css";


import OrderDetails from "./OrdersDetails";
import { useParams } from "react-router-dom";


const AdminDashboard = () => {

  const [orderDetails, setOrderDetails] = useState(true);
  
  const { section } = useParams();
  
  const [control,setControl] = useState("")
  

  if (section) {
   if (section !== control){
    setControl(section)
  }
  };
  console.log(control.toString())


  const {userDashboard} = useSelector(state=> state.users)
  return (
    <>
      <h3 className="d-flex justify-content-center ">Hi again {userDashboard.username ? userDashboard.username : userDashboard.email}! - your rol is: {userDashboard.roles}</h3>

      <div className="userDashBoardContainer d-flex">
        <div className="userDashBoard d-flex">
          <Tab.Container
            className="d-flex tabContainer"
            defaultActiveKey={control}
          >
            <Nav
              variant="pills"
              className="navSection d-flex flex-column datevuelta "
            >
              <Nav.Item className="d-flex">
                <Nav.Link eventKey="orders" className="d-flex" onClick={()=> setControl("orders")}>
                  <CgUserList className="d-flex" /> Orders
                </Nav.Link>
              </Nav.Item>

              <Nav.Item className="d-flex">
                <Nav.Link eventKey="products" className="d-flex" onClick={()=> setControl("products")}>
                  <CgHeart className="d-flex" /> Products
                </Nav.Link>
              </Nav.Item>

              <Nav.Item className="d-flex">
                <Nav.Link eventKey="users" className="d-flex" onClick={()=> setControl("users")}>
                  <CgList className="d-flex" /> Users
                </Nav.Link>
              </Nav.Item>

              <Nav.Item className="d-flex">
                <Nav.Link eventKey="profile" className="d-flex" onClick={()=> setControl("profile")}>
                  <CgList className="d-flex" /> Profile
                </Nav.Link>
              </Nav.Item>
            </Nav>

            <div className="section">
              <Tab.Content>
                <Tab.Pane eventKey="orders">
                  {orderDetails ? (
                    <AdminDashboardOrders
                      setOrderDetails={() => setOrderDetails(false)}
                    />
                  ) : (
                    <OrderDetails
                      setOrderDetails={() => setOrderDetails(true)}
                    />
                  )}
                </Tab.Pane>
                <Tab.Pane eventKey="products">
                {control === "products"?
                  <AdminDashboardProducts />
                :
                <></>
                }
                </Tab.Pane>
                <Tab.Pane eventKey="users">
                  <AdminDashboardUsers />
                </Tab.Pane>
                <Tab.Pane eventKey="profile">
                  <AdminDashboardAccount />
                </Tab.Pane>
              </Tab.Content>
            </div>
          </Tab.Container>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;

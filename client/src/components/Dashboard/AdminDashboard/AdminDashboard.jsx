import React from "react";
import AdminDashboardOrders from "./AdminDashboardOrders";
import AdminDashboardProducts from "./AdminDashboardProducts";
import AdminDashboardUsers from "./AdminDashboardUsers";
import AdminDashboardAccount from "./AdminDashboardAccount";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { CgUserList, CgHeart, CgList } from "react-icons/cg";
import "../../../styles/userDashboard.css";
import { useState } from "react";
import OrderDetails from "./OrdersDetails";

const UserDashboard = () => {
  const [orderDetails, setOrderDetails] = useState(true);
  return (
    <>
      <h3 className="d-flex justify-content-center ">Hello Admin!!</h3>

      <div className="userDashBoardContainer d-flex">
        <div className="userDashBoard d-flex">
          <Tab.Container
            className="d-flex tabContainer"
            defaultActiveKey="orders"
          >
            <Nav
              variant="pills"
              className="navSection d-flex flex-column datevuelta "
            >
              <Nav.Item className="d-flex">
                <Nav.Link eventKey="orders" className="d-flex">
                  <CgUserList className="d-flex" /> Orders
                </Nav.Link>
              </Nav.Item>

              <Nav.Item className="d-flex">
                <Nav.Link eventKey="products" className="d-flex">
                  <CgHeart className="d-flex" /> Products
                </Nav.Link>
              </Nav.Item>

              <Nav.Item className="d-flex">
                <Nav.Link eventKey="users" className="d-flex">
                  <CgList className="d-flex" /> Users
                </Nav.Link>
              </Nav.Item>

              <Nav.Item className="d-flex">
                <Nav.Link eventKey="account" className="d-flex">
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
                  <AdminDashboardProducts />
                </Tab.Pane>
                <Tab.Pane eventKey="users">
                  <AdminDashboardUsers />
                </Tab.Pane>
                <Tab.Pane eventKey="account">
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

export default UserDashboard;

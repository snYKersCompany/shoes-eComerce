import React, { useState } from "react";
import { useParams } from "react-router-dom";
import AdminDashboardOrders from "./AdminDashboardOrders";
import AdminDashboardProducts from "./AdminDashboardProducts";
import AdminDashboardUsers from "./AdminDashboardUsers";
import AdminDashboardAccount from "./AdminDashboardAccount";
import OrderDetails from "./OrdersDetails";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { TbFileSearch } from "react-icons/tb";
import { GiConverseShoe } from "react-icons/gi";
import { RiUserSearchLine, RiUserSettingsLine } from "react-icons/ri";
import "../../../styles/AdminDashboard.css";

const AdminDashboard = () => {
  const [orderDetails, setOrderDetails] = useState(true);
  const { section } = useParams();
  const [control, setControl] = useState("");

  if (section) {
    if (section !== control) {
      setControl(section);
    }
  }

  // const { userDashboard } = useSelector((state) => state.users);
  /* <h3 className="d-flex justify-content-center text-light">Hi again {userDashboard.username ? userDashboard.username : userDashboard.email}! - your rol is: {userDashboard.roles}</h3> */
  return (
    <div className="userDashBoard-container">
      <Tab.Container defaultActiveKey={control}>
        <Nav variant="pills" className="userDashBoard-nav-section">
          <Nav.Item className="userDashBoard-orders">
            <Nav.Link
              eventKey="orders"
              className="userDashBoard-nav-link"
              onClick={() => setControl("orders")}
            >
              <div className="userDashBoard-nav-display">
                <TbFileSearch className="userDashBoard-nav-icon " />
                <span className="text-icon">Orders</span>
              </div>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className="userDashBoard-products">
            <Nav.Link
              eventKey="products"
              className="userDashBoard-nav-link ic-ctm2"
              onClick={() => setControl("products")}
            >
              <div className="userDashBoard-nav-display">
                <GiConverseShoe className="userDashBoard-nav-icon ic-ctm1" />

                <span className="text-icon">Products</span>
              </div>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className="userDashBoard-users">
            <Nav.Link
              eventKey="users"
              className="userDashBoard-nav-link"
              onClick={() => setControl("users")}
            >
              <div className="userDashBoard-nav-display">
                <RiUserSearchLine className="userDashBoard-nav-icon" />
                <span className="text-icon">Users</span>
              </div>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className="userDashBoard-profile">
            <Nav.Link
              eventKey="profile"
              className="userDashBoard-nav-link"
              onClick={() => setControl("profile")}
            >
              <div className="userDashBoard-nav-display">
                <RiUserSettingsLine className="userDashBoard-nav-icon" />
                <span className="text-icon">Profile</span>
              </div>
            </Nav.Link>
          </Nav.Item>
        </Nav>
        {/* fin nav */}

        <Tab.Content className="userDashBoard-tab-section">
          <Tab.Pane eventKey="orders">
            {orderDetails ? (
              <AdminDashboardOrders
                setOrderDetails={() => setOrderDetails(false)}
              />
            ) : (
              <OrderDetails setOrderDetails={() => setOrderDetails(true)} />
            )}
          </Tab.Pane>
          <Tab.Pane eventKey="products">
            <AdminDashboardProducts />
          </Tab.Pane>
          <Tab.Pane eventKey="users">
            <AdminDashboardUsers />
          </Tab.Pane>
          <Tab.Pane eventKey="profile">
            <AdminDashboardAccount />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default AdminDashboard;

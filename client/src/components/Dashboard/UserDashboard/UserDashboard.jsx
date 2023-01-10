import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import UserProfile from "./UserProfile";
import UserFavorites from "./UserFavorites";
import UserOrders from "./UserOrders";
import ProductsBought from "./ProductsBough";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { CgUserList, CgHeart, CgList } from "react-icons/cg";
import "../../../styles/userDashboard.css";
import { useEffect } from "react";

import { getAllOrders } from "../../../redux/features/orders/ordersActions";
import { useParams } from "react-router-dom";

const UserDashboard = () => {
  
  const { userDashboard } = useSelector((state) => state.users);
  const { section } = useParams()
  const [control, setControl] = useState("");
  
  if (section) {
    if (section !== control) {
      setControl(section);
    }
  }

  const dispatch = useDispatch();
  
  useEffect(() => {
    if (userDashboard._id) {
      dispatch(getAllOrders({}, userDashboard._id));
    }
  }, [dispatch, userDashboard._id]);



  // console.log('esto es control =====================================================>>>>>>', control)

  return (
    <>
      <div className="userDashBoard-container">
          <Tab.Container defaultActiveKey={control}>
            
            <Nav variant="pills" className="userDashBoard-nav-section">
              
              <Nav.Item className="userDashBoard-profile">
                <Nav.Link
                  eventKey="profile"
                  className="userDashBoard-nav-link ic-ctm2"
                  onClick={() => setControl("profile")}
                >
                  <div className="userDashBoard-nav-display">
                    <CgUserList className="userDashBoard-nav-icon " /> 
                    <span className="text-icon">profile</span>
                  </div>
                </Nav.Link>
              </Nav.Item>


              <Nav.Item className="userDashBoard-users">
                <Nav.Link
                  eventKey="favorites"
                  className="userDashBoard-nav-link"              

                  onClick={() => setControl("favorites")}
                >
                  <div className="userDashBoard-nav-display">
                  <CgHeart className="userDashBoard-nav-icon" />
                    <span className="text-icon">Favorites</span>
                  </div>
                </Nav.Link>
              </Nav.Item>



              <Nav.Item className="userDashBoard-orders">
                <Nav.Link
                  eventKey="orders"
                  className="userDashBoard-nav-link"              
                  onClick={() => setControl("orders")}
                >
                  <div className="userDashBoard-nav-display">
                  <CgList  className="userDashBoard-nav-icon" />
                    <span className="text-icon">Orders</span>
                  </div>
                </Nav.Link>
              </Nav.Item>



              <Nav.Item className="userDashBoard-products">
                <Nav.Link
                  eventKey="bought"
                  className="userDashBoard-nav-link"
                  onClick={() => setControl("bought")}
                >

                  <div className="userDashBoard-nav-display">
                  <CgList  className="userDashBoard-nav-icon" />
                    <span className="text-icon">Products bought</span>
                  </div>

                </Nav.Link>
              </Nav.Item>

            </Nav>

              <Tab.Content className="userDashBoard-tab-section">
                <Tab.Pane eventKey="profile">
                  <UserProfile/> 
                </Tab.Pane>

                <Tab.Pane eventKey="favorites" >
                  <UserFavorites /> 
                </Tab.Pane>

                <Tab.Pane eventKey="orders">
                  <UserOrders /> 
                </Tab.Pane>

                <Tab.Pane eventKey="bought" >
                  <ProductsBought /> 
                  </Tab.Pane>
               </Tab.Content>
          </Tab.Container>
      </div>
    </>
  );
};

export default UserDashboard;

import React from "react";
import UserProfile from "./UserProfile";
import UserFavorites from "./UserFavorites";
import UserOrders from "./UserOrders";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { CgUserList, CgHeart, CgList } from "react-icons/cg";
import "../../../styles/userDashboard.css";

const UserDashboard = () => {
  return (
    <>
      <h3 className="d-flex justify-content-center ">Hello User</h3>

      <div className="userDashBoardContainer d-flex">
        <div className="userDashBoard d-flex">
          <Tab.Container
            className="d-flex tabContainer"
            defaultActiveKey="first"
          >
            <Nav
              variant="pills"
              className="navSection d-flex flex-column datevuelta "
            >
              <Nav.Item className="d-flex">
                <Nav.Link eventKey="profile" className="d-flex">
                  <CgUserList className="d-flex" /> Profile
                </Nav.Link>
              </Nav.Item>

              <Nav.Item className="d-flex">
                <Nav.Link eventKey="favorites" className="d-flex">
                  <CgHeart className="d-flex" /> Favorites
                </Nav.Link>
              </Nav.Item>

              <Nav.Item className="d-flex">
                <Nav.Link eventKey="orders" className="d-flex">
                  <CgList className="d-flex" /> Orders
                </Nav.Link>
              </Nav.Item>

              {/* <Nav.Item className="d-flex">
                <Nav.Link eventKey="review" className="d-flex">
                  <CgList className="d-flex" /> Review
                </Nav.Link>
              </Nav.Item> */}
            </Nav>

            <div className="section">
              <Tab.Content>
                <Tab.Pane eventKey="profile">
                  <UserProfile />
                </Tab.Pane>
                <Tab.Pane
                  eventKey="favorites"
                  className="d-flex justify-content-center align-content-center"
                >
                  <UserFavorites />
                </Tab.Pane>
                <Tab.Pane eventKey="orders" className=''>
                  <UserOrders />
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

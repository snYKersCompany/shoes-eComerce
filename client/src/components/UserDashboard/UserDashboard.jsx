import React from "react";
import NavBar from "../NavBar/NavBar";
import UserProfile from "./UserProfile";
import UserFavorites from "./UserFavorites";
import UserOrders from "./UserOrders";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { CgUserList, CgHeart, CgList } from "react-icons/cg";
import "../../styles/userDashboard.css";

const UserDashboard = () => {
  return (
    <>
      <NavBar />
      <h3 className="d-flex justify-content-center ">Hello User</h3>
      <div className="userDashBoardContainer d-flex">
        <div className="userDashBoard d-flex">
          <Tab.Container
            className="d-flex tabContainer"
            defaultActiveKey="first"
          >
            <div className="d-flex datevuelta">
              <Nav variant="pills" className="navSection d-flex flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="profile">
                    <CgUserList /> Profile
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="favorites">
                    <CgHeart /> Favorites
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="orders">
                    <CgList /> Orders
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>

            <div className="section">
              <Tab.Content>
                <Tab.Pane eventKey="profile">
                  <UserProfile />
                </Tab.Pane>
                <Tab.Pane eventKey="favorites">
                  <UserFavorites />
                </Tab.Pane>
                <Tab.Pane eventKey="orders">
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

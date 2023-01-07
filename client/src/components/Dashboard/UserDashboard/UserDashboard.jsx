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

const UserDashboard = () => {
  const dispatch = useDispatch();
  // console.log(UserDashboard)
  const { userDashboard } = useSelector((state) => state.users);

  // const { section } = useParams();

  const [control, setControl] = useState("");

  useEffect(() => {
    if (userDashboard._id) {
      dispatch(getAllOrders({}, userDashboard._id));
    }
  }, [dispatch, userDashboard._id]);

  // if (section.length) {
  //  if (section !== control){
  //   setControl(section)
  // }
  // };
  // console.log(control.toString())

  // console.log('esto es control =====================================================>>>>>>', control)

  return (
    <>
      <div className="userDashBoardContainer">
        <div className="userDashBoard ">
          <Tab.Container className=" tabContainer" defaultActiveKey={control}>
            <Nav variant="pills" className="navSection">
              <Nav.Item className="">
                <Nav.Link
                  eventKey="profile"
                  className=""
                  onClick={() => setControl("profile")}
                >
                  <CgUserList className="" /> Profile
                </Nav.Link>
              </Nav.Item>

              <Nav.Item className="">
                <Nav.Link
                  eventKey="favorites"
                  className=""
                  onClick={() => setControl("favorites")}
                >
                  <CgHeart className="" /> Favorites
                </Nav.Link>
              </Nav.Item>

              <Nav.Item className="">
                <Nav.Link
                  eventKey="orders"
                  className=""
                  onClick={() => setControl("orders")}
                >
                  <CgList className="" /> Orders
                </Nav.Link>
              </Nav.Item>

              <Nav.Item className="">
                <Nav.Link
                  eventKey="bought"
                  className=""
                  onClick={() => setControl("bought")}
                >
                  <CgList className="" /> Products bought
                </Nav.Link>
              </Nav.Item>
            </Nav>

            <div className="section  add">
              <Tab.Content>
                <Tab.Pane eventKey="profile">
                  {control === "profile" ? <UserProfile /> : <></>}
                </Tab.Pane>

                <Tab.Pane eventKey="favorites" className="">
                  {control === "favorites" ? <UserFavorites /> : <></>}
                </Tab.Pane>

                <Tab.Pane eventKey="orders">
                  {control === "orders" ? <UserOrders /> : <></>}
                </Tab.Pane>

                <Tab.Pane eventKey="bought" className="">
                  {control === "bought" ? <ProductsBought /> : <></>}
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

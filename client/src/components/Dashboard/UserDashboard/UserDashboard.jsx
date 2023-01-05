import React, {useState} from "react";
import UserProfile from "./UserProfile";
import UserFavorites from "./UserFavorites";
import UserOrders from "./UserOrders";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { CgUserList, CgHeart, CgList } from "react-icons/cg";
import "../../../styles/userDashboard.css";
import { useParams } from "react-router-dom";

const UserDashboard = () => {

 
  const { section } = useParams();
  
  const [control,setControl] = useState("")
  

  // if (section.length) {
  //  if (section !== control){
  //   setControl(section)
  // }
  // };


  return (
    <>

      <div className="userDashBoardContainer">
        <div className="userDashBoard d-flex w-100">
          <Tab.Container
            className="d-flex tabContainer"
            defaultActiveKey={control}
          >
            <Nav
              variant="pills"
              className="navSection d-flex flex-column "
            >
              <Nav.Item className="d-flex">
                <Nav.Link eventKey="profile" className="d-flex" onClick={()=> setControl("profile")}>
                  <CgUserList className="d-flex" /> Profile
                </Nav.Link>
              </Nav.Item>

              <Nav.Item className="d-flex">
                <Nav.Link eventKey="favorites" className="d-flex" onClick={()=> setControl("favorites")}>
                  <CgHeart className="d-flex" /> Favorites
                </Nav.Link>
              </Nav.Item>

              <Nav.Item className="d-flex">
                <Nav.Link eventKey="orders" className="d-flex" onClick={()=> setControl("orders")}>
                  <CgList className="d-flex" /> Orders
                </Nav.Link>
              </Nav.Item>

              {/* <Nav.Item className="d-flex">
                <Nav.Link eventKey="review" className="d-flex">
                  <CgList className="d-flex" /> Review
                </Nav.Link>
              </Nav.Item> */}
            </Nav>

            <div className="section d-flex">
              <Tab.Content>
                <Tab.Pane eventKey="profile">
                {control === "profile"?
                  <UserProfile />
                :  
                <></>
                }
                </Tab.Pane>

                <Tab.Pane
                  eventKey="favorites"
                  className="d-flex justify-content-center align-content-center"
                >
                  {control === "favorites"?
                  <UserFavorites />
                :  
                <></>
                }
                </Tab.Pane>



                
                <Tab.Pane eventKey="orders">
                {control === "orders"?

                  <UserOrders />
                :  
                <></>
                }
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

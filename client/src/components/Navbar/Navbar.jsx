import React, { useState, useEffect } from "react"; // eslint-disable-line
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
//JSX
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import SearchBar from "../SearchBar/SearchBar";
//SVG
import cartBlanco from "../../utils/images/navbar/cartBlanco.svg";
import accBlanco from "../../utils/images/navbar/accBlanco.svg";
//BS
import Container from "react-bootstrap/Container";
import NavB from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";
import { useSelector } from "react-redux"; 
//style
import "../../styles/navbar.css";

const NavBar = () => {
  const { userDashboard } = useSelector((state) => state.users);

  const navigate = useNavigate();

  //devuelve toda la info del contexto
  const authContext = useAuth(); // eslint-disable-line

  //devuelve el user del contexto
  const { user, logOut, loading } = useAuth();

  /////-----HANDLES-----/////
  const handleLogOut = async () => {
    await logOut();
    alert("You have been loged out");
    navigate("/home");
  };

  return (
    <>
      <div className="d-flex h-100 p-0 navBarContainerGeneral">
        <Container className="d-flex  ContainerGeneralNav ">
          <NavB.Brand className="d-flex p-0 ContainerNavImg logo">
            <Link to={"/home"} className="NavImg">
              <label className="brandNav">snYKers</label>
              {/* <img alt="SNYKERS" src={logoBlanco} /> */}
            </Link>
          </NavB.Brand>

          <SearchBar />

          <Nav
            className="justify-content-end align-items-center"
            activeKey="/home"
          >
            <div className="d-flex ">
              <div className="d-flex align-items-center">

              <NavItem className="linkNav">Home</NavItem>
              <NavItem className="linkNav">All</NavItem>
              <NavItem className="linkNav">Women</NavItem>
              <NavItem className="linkNav">Basket</NavItem>
              </div>
              
              <div className="d-flex align-items-center ms-2">


              <Dropdown as={NavItem}>
                <Dropdown.Toggle
                  as={NavLink}
                  className="navToggle d-flex justify-content-center align-items-center"
                >
                  <FaRegUser className="accountNav" />
                </Dropdown.Toggle>
                
                <Dropdown.Menu>
                  {!user ? (
                    <>
                      <Dropdown.Item href="/login">Login</Dropdown.Item>
                      <Dropdown.Item href="/register">Register</Dropdown.Item>
                    </>
                  ) : userDashboard.roles === "user" ? (
                    <>
                      <Dropdown.Item href="/account/profile">
                        Profile
                      </Dropdown.Item>
                      <Dropdown.Item href="/account/favorites">
                        Favorites
                      </Dropdown.Item>
                      <Dropdown.Item href="/account/orders">
                        Orders
                      </Dropdown.Item>
                      <Dropdown.Item onClick={handleLogOut}>
                        LogOut
                      </Dropdown.Item>
                    </>
                  ) : (
                    <>
                      <Dropdown.Item href="/account/orders">
                        Orders
                      </Dropdown.Item>
                      <Dropdown.Item href="/account/products">
                        Products
                      </Dropdown.Item>
                      <Dropdown.Item href="/account/users">Users</Dropdown.Item>
                      <Dropdown.Item href="/account/profile">
                        Profile
                      </Dropdown.Item>
                      <Dropdown.Item onClick={handleLogOut}>
                        LogOut
                      </Dropdown.Item>
                    </>
                  )}
                </Dropdown.Menu>
              </Dropdown>

              <NavItem>
                <Link to="/cart">
                  <HiOutlineShoppingCart className="cartNav" />
                </Link>
              </NavItem>
              </div>

            </div>

          </Nav>
        </Container>
      </div>
    </>
  );
};

export default NavBar;

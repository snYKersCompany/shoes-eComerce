import React, { useState, useEffect } from "react"; // eslint-disable-line
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
//JSX
import SearchBar from "../SearchBar/SearchBar";
//SVG
import logoBlanco from "../../utils/images/logoBlanco.svg";
import cartBlanco from "../../utils/images/navbar/cartBlanco.svg";
import accBlanco from "../../utils/images/navbar/accBlanco.svg";
//BS
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown"; 
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";
//style
import "../../styles/navbar.css";

const NavBar = () => {

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
      <Navbar bg="dark" className="d-flex h-100 p-0">
        <Container className="d-flex p-0 ContainerGeneralNav ">
          <Navbar.Brand className="d-flex p-0 ContainerNavImg logo">
            <Link to={"/home"} className="NavImg">
              <img alt="SNYKERS" src={logoBlanco}  />
            </Link>
          </Navbar.Brand>
          <SearchBar />
          <Nav
            className="justify-content-end align-items-center"
            activeKey="/home"
          >
            <Dropdown as={NavItem}>
              <Dropdown.Toggle
                as={NavLink}
                className="d-flex justify-content-center align-items-center"
              >
                <img
                  src={accBlanco}
                  width="40"
                  height="30"
                  className="d-flex ms-3"
                  alt="Acc"
                />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {!user ? (
                  <>
                    <Dropdown.Item href="/login">Login</Dropdown.Item>
                    <Dropdown.Item href="/register">Register</Dropdown.Item>
                  </>
                ) : (
                  <>
                    <Dropdown.Item href="/account">Account</Dropdown.Item>
                    <Dropdown.Item onClick={handleLogOut}>LogOut</Dropdown.Item>
                  </>
                )}
              </Dropdown.Menu>
            </Dropdown>
            <NavItem>
              <Link to="/cart">
                <img
                  src={cartBlanco}
                  width="40"
                  height="40"
                  className="d-inline-block align-top"
                  alt="Cart"
                />
              </Link>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;

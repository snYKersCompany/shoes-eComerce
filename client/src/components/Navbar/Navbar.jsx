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

  if (loading) {
    return <h1>Loading</h1>;
  }
  return (
    <>
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand>
            <div height="100px">
              <img
                alt="SNYKERS"
                src={logoBlanco}
                width="100%"
                height="100%"
                className="d-inline-block align-top"
              />
            </div>
          </Navbar.Brand>
          <Nav className="justify-content-end" activeKey="/home">
            <SearchBar />
            <Dropdown as={NavItem}>
              <Dropdown.Toggle as={NavLink}>
                <img
                  src={accBlanco}
                  width="40"
                  height="40"
                  className="d-inline-block align-top"
                  alt="Acc"
                />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {!user ? (
                  <>
                    <Dropdown.Item>
                      <Link to="/login">
                        <Dropdown.Item href="/login">Login</Dropdown.Item>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/register">
                        <Dropdown.Item href="/register">Register</Dropdown.Item>
                      </Link>
                    </Dropdown.Item>
                  </>
                ) : (
                  <>
                    <Dropdown.Item>
                      <Link to="/account">
                        <Dropdown.Item href="/login">Account</Dropdown.Item>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Dropdown.Item href="/register" onClick={handleLogOut}>
                        LogOut
                      </Dropdown.Item>
                    </Dropdown.Item>
                  </>
                )}
              </Dropdown.Menu>
            </Dropdown>
            <NavItem>
              <Navbar.Brand href="#home">
                <Link to="/">
                  <img
                    src={cartBlanco}
                    width="40"
                    height="40"
                    className="d-inline-block align-top"
                    alt="Cart"
                  />
                </Link>
              </Navbar.Brand>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;

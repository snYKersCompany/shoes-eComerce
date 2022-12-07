import React, { useState, useEffect } from "react"; // eslint-disable-line
import { Link } from "react-router-dom";
//JSX
import SearchBar from "../SearchBar/SearchBar";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
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

const NavBar = ({ user }) => {
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
                <Dropdown.Item>
                  <Login />
                </Dropdown.Item>
                <Dropdown.Item>
                  <Register />
                </Dropdown.Item>
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

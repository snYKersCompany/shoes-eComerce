import React, { useState, useEffect } from "react"; // eslint-disable-line
import { Link } from "react-router-dom";
//JSX
import SearchBar from "../SearchBar/SearchBar";
import logo from "../../utils/images/logo.svg"; // eslint-disable-line
import logoBlanco from "../../utils/images/logoBlanco.svg";
import cart from "../../utils/images/navbar/cart.svg"; // eslint-disable-line
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
  return (
    <>
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand href="#home">
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
                <Link to="/">
                  <img
                    src={accBlanco}
                    width="40"
                    height="40"
                    className="d-inline-block align-top"
                    alt="Acc"
                  />
                </Link>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Login</Dropdown.Item>
                <Dropdown.Item>Register</Dropdown.Item>
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

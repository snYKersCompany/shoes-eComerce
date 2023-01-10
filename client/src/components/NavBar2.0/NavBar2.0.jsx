import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
//JSX
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import SearchBar from "../SearchBar/SearchBar";
//BS
import NavB from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";
import { useSelector } from "react-redux";
//style
import Button from "react-bootstrap/esm/Button";
import "../../styles/navbar.css";

const NavBar2 = () => {
  const { userDashboard } = useSelector((state) => state.users);

  const navigate = useNavigate();

  //devuelve toda la info del contexto
  const authContext = useAuth(); // eslint-disable-line

  //devuelve el user del contexto
  const { user, logOut } = useAuth();

  /////-----HANDLES-----/////
  const handleLogOut = async () => {
    await logOut();
    navigate("/");
  };

  ///TOOLTIP///
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClickCartNav = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  const handleClickLoginCartNav = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="d-flex h-100 p-0 navBarContainerGeneral">
        <div className="d-flex  ContainerGeneralNav ">
          <NavB.Brand className="d-flex p-0 ContainerNavImg logo">
            <Link to={"/"} className="NavImg">
              <label className="brandNav">snYKers</label>
              {/* <img alt="SNYKERS" src={logoBlanco} /> */}
            </Link>
          </NavB.Brand>
          <div className="SearchNavBar">
            <SearchBar />
          </div>

          <Nav
            className="justify-content-end align-items-center"
            activeKey="/home"
          >
            <div className="d-flex ">
              <div className="d-flex align-items-center linksAuxNav">
                <Link to={"/"} className="noneDecoration">
                  <NavItem className="linkNav">Home</NavItem>
                </Link>

                <Link to={"/home"} className="noneDecoration">
                  <NavItem className="linkNav">Products</NavItem>
                </Link>

                <Link to={"/basketball"} className="noneDecoration">
                  <NavItem className="linkNav">Basket</NavItem>
                </Link>

                <Link to={"/women"} className="noneDecoration">
                  <NavItem className="linkNav">Women</NavItem>
                </Link>
              </div>

              <div className="d-flex align-items-center ms-2 cartAndAccount">
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
                    ) : userDashboard?.roles === "user" ? (
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
                        <Dropdown.Item href="/account/users">
                          Users
                        </Dropdown.Item>
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
                  {user ? (
                    <Link to="/cart">
                      <HiOutlineShoppingCart className="cartNav" />
                    </Link>
                  ) : (
                    <div ref={ref} className="text-center">
                      <HiOutlineShoppingCart
                        onClick={handleClickCartNav}
                        className="cartNav"
                      />
                      <Overlay
                        show={show}
                        target={target}
                        placement="bottom"
                        container={ref}
                        containerPadding={20}
                      >
                        <Popover id="popover-contained">
                          <Popover.Header
                            className="navToggle d-flex justify-content-center align-items-center"
                            as="h3"
                          >
                            <Button
                              onClick={handleClickLoginCartNav}
                              variant="link"
                            >
                              LogIn
                            </Button>
                          </Popover.Header>
                          <Popover.Body className="text-center">
                            <strong>You must be logged in </strong>
                            <br />
                            to enter the cart
                          </Popover.Body>
                        </Popover>
                      </Overlay>
                    </div>
                  )}
                </NavItem>
              </div>
            </div>
          </Nav>
        </div>
      </div>
    </>
  );
};

export default NavBar2;

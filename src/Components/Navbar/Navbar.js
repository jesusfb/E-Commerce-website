import React, { Fragment, useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import CartContext from "../Store/CartContext";
import "../../Components/Navbar/MusicHead.css";
import "./style.css";

const Navbars = (props) => {
  const ctxt = useContext(CartContext);
  return (
    <Fragment>
      <Navbar className="w-full" bg="dark">
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto text-center text-base md:text-xl z-1 bg-dark">
              <Nav.Link
                href="#/"
                className=" px-3 md:px-3 py-2 nav-link"
              >
                <NavLink to="/" className="no-underline" activeClassName="active">
                  HOME
                </NavLink>
              </Nav.Link>
              <Nav.Link href="#/" className=" px-3 md:px-3 py-2 ">
                <NavLink to="/concert" className="no-underline" activeClassName="active" style={{ color: "white" }}>
                  CONCERT
                </NavLink>
              </Nav.Link>
              <Nav.Link href="#/" className=" px-3 md:px-3 py-2 ">
                <NavLink to="/about" className="no-underline" activeClassName="active" style={{ color: "white" }}>
                  ABOUT
                </NavLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav className="ml-auto">
            <div className="flex items-center border-1 border-red-600 rounded p-2 text-white cursor-pointer  w-auto">
              <FaShoppingCart size={25} onClick={props.cartHandler} />
              <span
                className="mx-1 md:mx-2 text-base md:text-xl text-white"
                onClick={props.cartHandler}
              >
                Cart{" "}
                <span className="text-red-800">
                  {ctxt.item.length}
                </span>
              </span>
            </div>
          </Nav>
        </Container>
      </Navbar>
      <div className="mt-1">
        <h1 className="p-5 md:p-10 text-4xl md:text-8xl text-center bg-red-200">
          The <span className="text-red-500">Generics</span>
        </h1>
      </div>
      <div>
        <h1 className="text-center font-bold music-heading">Music</h1>
      </div>
    </Fragment>
  );
};

export default Navbars;

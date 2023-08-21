import React, { Fragment, useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import CartContext from "../Store/CartContext";
import AuthContext from "../../LoginPage/AuthContext";
import "../../Components/Navbar/MusicHead.css";
import "./style.css";
import Homeheading from "./Homeheading";

const Navbars = (props) => {
  const ctxt = useContext(CartContext);
  const Authctxt = useContext(AuthContext);
  return (
    <Fragment>
      <Navbar className="w-full flex-wrap" bg="dark">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto text-center text-base md:text-xl z-1 bg-dark">
            <Nav.Link href="#/" className=" px-2 md:px-3 py-2 nav-link">
              <NavLink
                to="/home"
                className="no-underline"
                activeClassName="active"
              >
                HOME
              </NavLink>
            </Nav.Link>
            <Nav.Link href="#/" className=" px-2 md:px-3 py-2 nav-link ">
              <NavLink
                to="/concert"
                className="no-underline"
                activeClassName="active"
                style={{ color: "white" }}
              >
                CONCERT
              </NavLink>
            </Nav.Link>
            <Nav.Link href="#/" className=" px-2 md:px-3 py-2 nav-link">
              <NavLink
                to="/about"
                className="no-underline"
                activeClassName="active"
                style={{ color: "white" }}
              >
                ABOUT
              </NavLink>
            </Nav.Link>
            <Nav.Link href="#/" className=" px-2 md:px-3 py-2 nav-link ">
              <NavLink
                to="/contact"
                className="no-underline"
                activeClassName="active"
                style={{ color: "white" }}
              >
                CONTACT
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav className="ml-40">
          <div className="flex items-center border-1 border-red-600 rounded p-1 text-white cursor-pointer w-auto nav-cart">
            <FaShoppingCart size={25} onClick={props.cartHandler} />
            <span
              className="mx-1 md:mx-2 text-base md:text-xl text-white"
              onClick={props.cartHandler}
            >
              Cart <span className="text-red-800 text-xl">{ctxt.item.length}</span>
            </span>
          </div>
        </Nav>
        <div href="#/" className=" px-2 md:px-3 py-2">
          <NavLink
            to="/"
            className="no-underline border-1 border-white p-2 rounded hover:font-semibold hover:bg-slate-500"
            activeClassName="active"
            style={{ color: "white" }}
            onClick={()=>Authctxt.Logout()}
          >
            LOGOUT
          </NavLink>
        </div>
      </Navbar>
      <Homeheading />
    </Fragment>
  );
};

export default Navbars;

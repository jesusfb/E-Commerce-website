import React, { Fragment } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaPlayCircle } from "react-icons/fa";
import ConcertDetails from "./ConcertDetails";
import Footer from "../Footer/Footer";
import "../Components/Navbar/style.css";
import "../Components/Navbar/MusicHead.css";

const Concert = () => {
  return (
    <Fragment>
      <Navbar className="w-full" bg="dark">
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto text-center text-base md:text-xl z-1 bg-dark">
              <Nav.Link href="#/" className=" px-3 md:px-3 py-2 nav-link">
                <NavLink
                  to="/home"
                  className="no-underline"
                  activeClassName="active"
                  style={{ color: "white" }}
                >
                  HOME
                </NavLink>
              </Nav.Link>
              <Nav.Link href="#/" className=" px-3 md:px-3 py-2 nav-link">
                <NavLink
                  to="/concert"
                  className="no-underline"
                  activeClassName="active"
                >
                  CONCERT
                </NavLink>
              </Nav.Link>
              <Nav.Link href="#/" className=" px-3 md:px-3 py-2 nav-link">
                <NavLink
                  to="/about"
                  className="no-underline"
                  activeClassName="active"
                  style={{ color: "white" }}
                >
                  ABOUT
                </NavLink>
              </Nav.Link>
              <Nav.Link href="#/" className=" px-3 md:px-3 py-2 nav-link">
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
        </Container>
      </Navbar>
      <div>
        <h1 className="p-5 md:p-10 text-4xl md:text-8xl text-center bg-red-200">
          The <span className="text-red-500">Generics</span>
          <div className=" mt-3 md:mt-1">
            <button className="text-xl border-1 rounded border-sky-600 text-center p-2 px-3 hover:bg-red-300 hover:font-semibold">
              Get Our <span className="text-red-600">Latest</span> Album
            </button>
            <FaPlayCircle
              size={40}
              className="m-auto mt-2 cursor-pointer rounded-full"
            />
          </div>
        </h1>
      </div>
      <section className="mt-0 mx-auto text-xl px-4 md:w-3/4 lg:w-3/4">
        <div className="text-center">
          <h2 className="font-bold music-heading">TOURS</h2>
        </div>
        <div>
          <ConcertDetails date="JUL 16" city="Patna" location="Gandhi Maidan" />
          <ConcertDetails
            date="AUG 24"
            city="Kolkata"
            location="Satyajit Ray Auditorium"
          />
          <ConcertDetails
            date="SEP 27"
            city="Pune"
            location="Royal Orchid Central"
          />
          <ConcertDetails
            date="SEP 17"
            city="Bangalore"
            location="SMVIT College"
          />
          <ConcertDetails date="OCT 10" city="Mumbai" location="India Gate" />
          <ConcertDetails
            date="DEC 31"
            city="Delhi"
            location="Delhi University"
          />
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default Concert;

import React, { Fragment } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import '../Components/Navbar/MusicHead.css';
import '../Components/Navbar/style.css';
import ContactForm from "./contactForm";
import Footer from "../Footer/Footer";

const Contact = () => {
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
                  style={{ color: "white" }}
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
        </h1>
      </div>
      <section className="mt-0 mx-auto text-xl px-4 md:w-3/4 lg:w-3/4">
        <div className="text-center">
          <h2 className="font-bold music-heading">CONTACT US</h2>
        </div>
      </section>
      <ContactForm />
      <div className="mt-56">
        <Footer />
      </div>
    </Fragment>
  );
};

export default Contact;

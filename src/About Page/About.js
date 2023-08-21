import React, { Fragment } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../Components/Navbar/style.css";
import "../Components/Navbar/MusicHead.css";
import IMG from "../Concert Page/assests/musicband.jpg";
import Footer from "../Footer/Footer";

const About = () => {
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
        </h1>
      </div>
      <section className="mt-0 mx-auto text-xl px-4 md:w-3/4 lg:w-3/4">
        <div className="text-center">
          <h2 className="font-bold music-heading">ABOUT</h2>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start">
          <img
            src={IMG}
            alt="err"
            className="mt-5 rounded-full w-48 h-48 md:mr-8"
          />
          <p className="mt-5 text-xl text-justify">
            Music is a universal language that transcends cultural and
            linguistic barriers, evoking emotions, memories, and connections. It
            has the power to convey a wide range of feelings, from joy and
            excitement to sorrow and introspection. Throughout history, music
            has played a significant role in human society, serving as a form of
            expression, communication, and entertainment. The diversity of
            musical genres and styles reflects the richness of human creativity
            and imagination. From classical masterpieces to contemporary pop
            hits, from soothing jazz melodies to energetic rock anthems, music
            offers something for everyone's taste and mood. In addition to its
            emotional impact, music has been studied for its potential cognitive
            and therapeutic benefits. It can enhance concentration, improve
            memory, and even alleviate stress and anxiety. Music therapy is
            widely used as a complementary approach to support individuals
            dealing with various health conditions, promoting well-being and
            healing. Music is not just about the sounds; it's also deeply
            intertwined with culture and identity. Different cultures have their
            own unique musical traditions and instruments, reflecting their
            history, values, and social dynamics. Music serves as a way to
            preserve heritage and connect generations.With the advent of
            technology, music consumption has transformed significantly.
          </p>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default About;

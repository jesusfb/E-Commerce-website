import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { MDBFooter } from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div className="d-flex">
          <a href="https://www.linkedin.com/in/kunal-kumar-31a256214/ " className="me-4 text-reset" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/kunalrajshah" className="me-4 text-reset" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/rajshah_0709/" className="me-4 text-reset" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </div>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2023 Copyright:
        <a className="text-reset fw-bold" href="/">
          BookMyShow.com
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;

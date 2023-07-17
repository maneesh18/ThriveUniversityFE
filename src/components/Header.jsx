import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const expand = "lg";
  const [show, setShow] = useState(false);

  window.onscroll = function () {
    let myNav = document.getElementById("nav");
    if (
      document.body.scrollTop >= 200 ||
      document.documentElement.scrollTop >= 200
    ) {
      myNav.classList.add("top-navbar-scroll");
      myNav.classList.remove("top-navbar");
    } else {
      myNav.classList.add("top-navbar");
      myNav.classList.remove("top-navbar-scroll");
    }
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleLinkClick = () => {
    // Close the Offcanvas
    handleClose();
  };

  const url = "https://maneesh18.github.io/ThriveUniversityFE";
  const navigate = useNavigate();

  return (
    <>
      <Navbar
        id="nav"
        variant="dark"
        expand={expand}
        fixed="top"
        style={{ height: "70px" }}
      >
        <Container fluid>
          <Navbar.Brand href={url+"/"}>
            <img
              alt="logo"
              src="../images/logo.jpeg"
              className="navbar-logo-icon d-inline-block align-top circular-image "
            />{" "}
            <span className="heading-font navbar-logo-text">
              {" "}
              Thrive University
            </span>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-${expand}`}
            onClick={handleShow}
          />
          <Navbar.Offcanvas
            show={show}
            onHide={handleClose}
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
            responsive="lg"
          >
            <Offcanvas.Header
              className="offcanvas-onactive"
              closeButton
              closeVariant="white"
            ></Offcanvas.Header>
            <Offcanvas.Body className="offcanvas-onactive" variant="light">
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} onClick={handleLinkClick} to={url+"/"}>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} onClick={handleLinkClick} to={url+"/about"}>
                  About
                </Nav.Link>
                <Nav.Link as={Link} onClick={handleLinkClick} to={url+"/academics"}>
                  Academics
                </Nav.Link>
                <Nav.Link as={Link} onClick={handleLinkClick} to={url+"/placements"}>
                  Placements{" "}
                </Nav.Link>
                <Nav.Link as={Link} onClick={handleLinkClick} to={url+"/contact"}>
                  Contact
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;

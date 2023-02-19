import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

function Header() {
  const expand = "lg";
  const [show, setShow] = useState(false);
  
  window.onscroll = function () { 
    let myNav = document.getElementById('nav');
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200 ) {
          myNav.classList.add("top-navbar-scroll");
          myNav.classList.remove("top-navbar");
      } 
      else {
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
  return (
    <>
      <Navbar
        id="nav"
        key={expand}
        variant="dark"
        expand={expand}
        fixed="top"
        style={{height:"70px"}}
      >
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              alt="logo"
              src="../images/logo.jpeg"
              className="d-inline-block align-top circular-image navbar-logo-icon"
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
                <Nav.Link as={Link} onClick={handleLinkClick} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} onClick={handleLinkClick} to="/about">
                  About
                </Nav.Link>
                <Nav.Link as={Link} onClick={handleLinkClick} to="/academics">
                  Academics
                </Nav.Link>
                <Nav.Link as={Link} onClick={handleLinkClick} to="/placements">
                  Placements{" "}
                </Nav.Link>
                <Nav.Link as={Link} onClick={handleLinkClick} to="/contact">
                  Contact
                </Nav.Link>
              </Nav>
              <Button variant="outline-light">Login</Button>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;

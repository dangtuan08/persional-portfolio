import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/img/logo.svg'
import navIncon1 from '../assets/img/nav-icon1.svg'
import navIncon2 from '../assets/img/nav-icon2.svg'
import navIncon3 from '../assets/img/nav-icon3.svg'



function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setSrcolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setSrcolled(true);
      } else {
        setSrcolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled":""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toogle-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => {
                onUpdateActiveLink("home");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skill"
              className={
                activeLink === "skill" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => {
                onUpdateActiveLink("skill");
              }}
            >
              Skill
            </Nav.Link>
            <Nav.Link
              href="#project"
              className={
                activeLink === "project" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => {
                onUpdateActiveLink("project");
              }}
            >
              Project
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#">
                <img src={navIncon1} alt="navIncon1" />
              </a>
              <a href="#">
                <img src={navIncon2} alt="navIncon2" />
              </a>
              <a href="#">
                <img src={navIncon3} alt="navIncon3" />
              </a>
            </div>
            <button className="vvd" onClick={() => console.log("")}>
              <span>Let's connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

import React, { useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import "./Navbar.scss";
import Logo from "../../Images/Logo 4.png";
export default function ResponsiveNavbar() {
  // State to control the collapse behavior
  const [expanded, setExpanded] = useState(false);

  // Function to handle closing the navbar when a menu item is clicked
  const handleNavLinkClick = () => {
    setExpanded(false); // Collapse the navbar
  };

  return (
    <div className="Navbar">
      <motion.div
        initial={{ opacity: 0, y: -20 }} // Initial state for navbar
        animate={{ opacity: 1, y: 0 }} // Animated state when mounted
        transition={{ duration: 0.5 }} // Animation duration
      >
        <Navbar
          collapseOnSelect
          expand="lg"
          className="custom-navbar"
          expanded={expanded} // Pass the expanded state
        >
          <Container>
            {/* Logo on the left with motion effect */}
            <Navbar.Brand as={Link} to="/" className="logo-container">
              <motion.img
                src={Logo}
                width="300"
                height="100"
                className="d-inline-block align-top img-fluid logo"
                alt="Logo"
                whileHover={{ scale: 1.05 }} // Scale on hover
                transition={{ type: "spring", stiffness: 300 }} // Spring effect
              />
            </Navbar.Brand>

            {/* Toggle button for mobile view */}
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              onClick={() => setExpanded(!expanded)} // Toggle the navbar state
            >
              <FaBars color="black" />
            </Navbar.Toggle>

            <Navbar.Collapse
              id="responsive-navbar-nav"
              className="nav-collapse"
            >
              <Nav className="ms-auto">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Nav.Link
                    as={Link}
                    to="/home"
                    className="nav-link-hover"
                    onClick={handleNavLinkClick}
                  >
                    Home
                  </Nav.Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Nav.Link
                    as={Link}
                    to="/about"
                    className="nav-link-hover"
                    onClick={handleNavLinkClick}
                  >
                    About
                  </Nav.Link>
                </motion.div>
                <li className="nav-item dropdown nav-link-hover">
                  <a
                    className="nav-link dropdown-toggle rd-clr"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Products
                  </a>
                  <ul className="dropdown-menu nav-link-hover">
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/LAF"
                        onClick={handleNavLinkClick}
                      >
                        Laminated Aluminium Foil / Metlized Film
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/LMF"
                        onClick={handleNavLinkClick}
                      >
                        Laminated Aluminium Foil / Metalized Paper
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/Ply"
                        onClick={handleNavLinkClick}
                      >
                        3/4 Ply Laminated Products
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/Insulation"
                        onClick={handleNavLinkClick}
                      >
                        Insulation Material
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/SBLP"
                        onClick={handleNavLinkClick}
                      >
                       Solvant Based Laminated Products
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* Resources dropdown */}

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Nav.Link
                    as={Link}
                    to="/Glr"
                    className="nav-link-hover"
                    onClick={handleNavLinkClick}
                  >
                    Gallery
                  </Nav.Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Nav.Link
                    as={Link}
                    to="/contact"
                    className="nav-link-hover"
                    onClick={handleNavLinkClick}
                  >
                    Contact Us
                  </Nav.Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Nav.Link as={Link} to="/contact">
                    <button className="nav-btn" onClick={handleNavLinkClick}>
                      Request a Sample
                    </button>
                  </Nav.Link>
                </motion.div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </motion.div>
    </div>
  );
}

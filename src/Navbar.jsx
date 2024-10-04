import React from "react";
import { NavLink, Link } from "react-router-dom";
import './index.css'; // Importing custom CSS for styling
import sampleLogo from './images/React_Logo.jpg'; // Replace with the path to your logo

const Navbar = () => {
  // Smooth scroll to the top of the page when navigating links
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top navbar-dark-blue">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/" onClick={handleNavClick}>
            <img src={sampleLogo} alt="Logo" className="logo" /> {/* Logo on the left side */}
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  activeClassName="menu_active"
                  exact
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  onClick={handleNavClick}
                >
                  Home
                </NavLink>
              </li>

              {/* Link to Blog Section on Home */}
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#latestblogs" // Ensuring smooth scroll to blog section on the same page
                  onClick={handleNavClick}
                >
                  Blog
                </a>
              </li>

              <li className="nav-item">
                <NavLink
                  activeClassName="menu_active"
                  className="nav-link"
                  to="/service"
                  onClick={handleNavClick}
                >
                  Service
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="menu_active"
                  className="nav-link"
                  to="/about"
                  onClick={handleNavClick}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="menu_active"
                  className="nav-link"
                  to="/contact"
                  onClick={handleNavClick}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

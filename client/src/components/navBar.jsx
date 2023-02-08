import React from "react";
import './hovers.css';

const Nav = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg  p-2">
        <div className="container-fluid">
          <div>
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                logo
                              </a>
            </div>
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
          </div>

          <div
            className="D-flex w-50"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-around">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white raise"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About US
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Our Mission
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Contact Us{" "}
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      {" "}
                      Our Team{" "}
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white raise" href="#">
                  Why Food Bank?
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white raise" href="#">
                  Project
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-white raise" href="#">
                  Propose
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white raise"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Login
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Login
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Sign up{" "}
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-warning nav-link text-white btncolor raise">
                  Donate
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Nav;
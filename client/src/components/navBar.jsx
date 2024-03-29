import React,{useState,useEffect} from "react";
import "./hovers.css";
import { Link, useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

const Nav = () => {

  const navigate=useNavigate();
  const gotoNext= () => {
    navigate('/donate');
      
  }
  const token = localStorage.getItem("token");
  const decodedToken = jwtDecode(token);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        
        if (decodedToken && decodedToken.exp > Date.now() / 1000) {
          setIsLoggedIn(true);
        }
      } catch (error) {
        setIsLoggedIn(false);
      }
    }
  }, []);
  return (
    
  
    <React.Fragment>
      
      <nav className="navbar navbar-expand-lg  p-2 ">
        <div className="container-fluid  ">
          <div>
            <div class="container-fluid">
              <Link class="navbar-brand" to={'/'}>
              
              </Link>

              <div className="divimg">
              <Link class="navbar-brand" to={'/'}>
              <img src="logo2.png" height={80} width={100} alt="" />
              </Link>
            </div>
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

          <div className="D-flex w-50" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-around">
            <li className="nav-item">
                <Link className="nav-link text-white raise" to={'/'}>
                  Home
                </Link>
              </li>
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
                    <Link className="dropdown-item" to={'/Mission'}>
                      Our Mission
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={'/contactus'}>
                      Contact Us{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={'/ourteam'}>
                      Our Team{" "}
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white raise" to={'/whyFoodBank'}>
                  Why Food Bank?
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white raise" to={'/projects'}>
                  Projects
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link text-white raise" to={'/propose'}>
                  Propose
                </Link>
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
                    {/* <Link className="dropdown-item" onClick={loginWithRedirect}>
                      Login
                    </Link> */}
                       {!isLoggedIn && (
        <Link className="dropdown-item" to="/login">
          Login
        </Link>
      )}
                  </li>
                  <li>
                    <Link className="dropdown-item" to={'/signup'}>
                      Sign up{" "}
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <button
                  className="btn  nav-link text-white btncolor raise"
                  onClick={gotoNext}
                >
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

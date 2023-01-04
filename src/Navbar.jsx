const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png"
            width="30"
            height="24"
            alt="logo"
          />
          Logo
        </a>
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
          <ul className="me-auto"></ul>
          <form className="d-flex" role="search">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item px-2">
                <a className="nav-link " aria-current="page" href="#">
                  About us
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link" href="#">
                  Projects
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link" href="#">
                  Support us
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link" href="#">
                  Contacts
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link btn btn-warning w-100 px-3" href="#">
                  Donate
                </a>
              </li>
              {/* <li className="nav-item ">
                <button className="nav-link btn btn-warning btn-lg">
                  Donante
                </button>
              </li> */}
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;

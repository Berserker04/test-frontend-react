import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary bg-dark"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ml-1" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex w-100 justify-content-center">
            <li className="nav-item">
              <NavLink className="nav-link fs-4" aria-current="page" to={"/"}>
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fs-4" to={"/item1"}>
                Item 1
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fs-4" to={"/item2"}>
                Item 2
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

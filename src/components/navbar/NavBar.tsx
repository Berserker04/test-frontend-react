import { Link, useLocation } from "react-router-dom";

const titleNavBar: Record<string, string> = {
  "/item1": "Crud de usuarios",
  "/item2": "Tabla de usuarios",
};

const NavBar = () => {
  const { pathname } = useLocation();
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary bg-dark"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand fs-3 mr-5 w10" href="#">
          {titleNavBar[pathname]}
        </a>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link fs-4" aria-current="page" to={"/"}>
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-4" to={"/item1"}>
                Item 1
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-4" to={"/item2"}>
                Item 2
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

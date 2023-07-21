import { Link } from "react-router-dom";

import Styles from "./_Styles.module.scss";

const HomeView = () => {
  return (
    <div className={Styles.home__view}>
      <div>
        <h3>¡Bienvenido!</h3>
        <p>Elige a que vista quieres ir.</p>
      </div>
      <div className="row bg-white bg-opacity-75 p-5 rounded-4">
        <div className="col-6">
          <Link to={"/item1"} className="btn btn-primary btn-lg">
            Ir al item 1
          </Link>
        </div>
        <div className="col-6">
          <Link to={"/item2"} className="btn btn-primary btn-lg">
            Ir al item 2
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeView;

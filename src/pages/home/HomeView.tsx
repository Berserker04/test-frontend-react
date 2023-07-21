import { Link } from "react-router-dom";

const HomeView = () => {
  return (
    <div
      className=""
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        alignItems: "center",
      }}
    >
      <div className="row">
        <div
          className="col-6"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link to={"/item1"} className="btn btn-primary">
            Ir al item 1
          </Link>
        </div>
        <div
          className="col-6"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link to={"/item2"} className="btn btn-primary">
            Ir al item 2
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeView;

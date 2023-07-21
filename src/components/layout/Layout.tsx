import { Outlet } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";

const Layout = () => {
  return (
    <div style={{ backgroundColor: "red" }}>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

import { Outlet } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";
import Styles from "./_Styles.module.scss";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <main className={Styles.mainContainer}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

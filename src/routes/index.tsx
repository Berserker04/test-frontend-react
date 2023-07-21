import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeView from "../pages/home/HomeView";
import Item1View from "../pages/item1/Item1View";
import Item2View from "../pages/item2/Item2View";
import NavBar from "../components/navbar/NavBar";

const RouteApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route element={<NavBar />}>
          <Route path="/item1" element={<Item1View />} />
          <Route path="/item2" element={<Item2View />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteApp;

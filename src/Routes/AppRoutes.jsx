import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Statistics from "../Pages/Statistics";
import AddMovie from "../Pages/AddMovie";
import Wishlist from "../Pages/Wishlist";

const AppRoutes = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/stats" element={<Statistics />} />
          <Route path="/addmovie" element={<AddMovie />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default AppRoutes;

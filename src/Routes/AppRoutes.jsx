import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Statistics from "../Pages/Statistics";
import AddMovie from "../Pages/AddMovie";
import Wishlist from "../Pages/Wishlist";
import ErrorPage from "../Components/ErrorPage";
import NotDevpage from "../Components/NotDevpage";

const AppRoutes = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/stats" element={<Statistics />} />
          <Route path="/addmovie" element={<AddMovie />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/watched" element={<NotDevpage />} />
          <Route path="/genrelist" element={<NotDevpage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default AppRoutes;

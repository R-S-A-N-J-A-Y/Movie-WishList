import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout d-flex flex-column">
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;

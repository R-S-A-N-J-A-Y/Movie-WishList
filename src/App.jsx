import React from "react";
import "./Styles/App.css";
import AppRoutes from "./Routes/AppRoutes";
import { MovieProvider } from "./Contexts/MovieContext";

const App = () => {
  return (
    <MovieProvider>
      <AppRoutes />
    </MovieProvider>
  );
};

export default App;

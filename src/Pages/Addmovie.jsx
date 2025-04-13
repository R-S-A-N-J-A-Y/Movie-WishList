import React from "react";
import AddMovieForm from "../Components/AddMovieForm";

const AddMovie = () => {
  return (
    <div className="pt-4 pb-4">
      <h3 className="text-center pb-2 fs-2 fw-bold">Add Movie</h3>
      <AddMovieForm />
    </div>
  );
};

export default AddMovie;

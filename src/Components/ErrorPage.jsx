import React from "react";

const ErrorPage = () => {
  return (
    <div className="bg-white text-dark d-flex flex-column flex-md-row align-items-center error-page ">
      <img src="Icons/Oops.jpg" alt="" />
      <p className="text-center p-2">Oops !! This page is Not Available.</p>
    </div>
  );
};

export default ErrorPage;

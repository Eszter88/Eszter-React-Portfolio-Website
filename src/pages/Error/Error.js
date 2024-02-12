import React from "react";
import { Link } from "react-router-dom";
import "./Error.scss";

function error() {
  return (
    <div className="container error-page">
      <h1>Ooops... page not found</h1>
      <Link to="/" className="flat-button">
        Go back to Homepage
      </Link>
    </div>
  );
}

export default error;

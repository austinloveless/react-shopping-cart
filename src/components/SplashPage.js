import React from "react";
import { Link } from "react-router-dom";

const SplashPage = () => {
  return (
    <div>
      <div id="landing-header">
        <h1>Welcome to ShoppingCart</h1>
        <Link to="/register" className="btn btn-lg btn-default">
          Start Shopping!
        </Link>
      </div>

      <ul className="slideshow">
        <li />
        <li />
        <li />
        <li />
        <li />
      </ul>
    </div>
  );
};

export default SplashPage;

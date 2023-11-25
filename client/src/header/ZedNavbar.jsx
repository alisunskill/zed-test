import React from "react";
import { Link } from "react-router-dom";

export default function ZedNavbar() {
  return (
    <div className="d-flex gap-3 align-items-center px-lg-5 px-4 py-lg-3 py-1">
      <h4 className="p-2 mt-3 bolder text-start">
        <Link to="/" className="text-light text-decoration-none">
          Home
        </Link>
      </h4>
      <h4 className="p-2 mt-3 bolder text-start">
        <Link to="/allcards" className="text-light text-decoration-none">
          Record
        </Link>
      </h4>
    </div>
  );
}

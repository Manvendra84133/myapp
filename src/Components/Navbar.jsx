import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container-fluid">

        <Link className="navbar-brand text-white" to="/">SensorSphere</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">

            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/aboutus">AboutUs</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/products">Products</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/faq">FAQ's</Link>
            </li>

          </ul>

          <div className="d-flex gap-3">
            <Link to="/login" className="btn btn-primary text-white border-dark">Login</Link>
            <Link to="/registration" className="btn btn-primary text-white border-dark">Signup</Link>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
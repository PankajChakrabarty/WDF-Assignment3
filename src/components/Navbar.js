import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar () {
    return (
        <nav id="nav" class= "navbar navbar-expand-lg navbar-light bg-light lg-4">
  <div class="container-fluid">
    <Link className="navbar-brand" to="/">SPA Example</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li clas="nav-item">
        <Link className="nav-Link" to="/">Home</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-Link" to="/About">About </Link>
        </li>
        <li class="nav-item">
        <Link className="nav-Link" to="/ContactUs">ContactUS</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
}
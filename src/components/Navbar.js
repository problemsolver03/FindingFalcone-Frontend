import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({mobile ,toggleMenu}) {
  return (
    <header className="container">
      <nav className="navbar navbar-expand-lg ">
        <a className="navbar-brand" href="/">
          <span className="logoStyle">Finding Falcone</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"       
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
         <img src="/images/button.png" className="iconMenu" alt="menu icon"/>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.geektrust.in/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Geek Trust
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className={`mobileMenu ${!mobile ? "hide" : 'show'}`}>
        <ul>
          <li className="text-right">
            <span onClick={toggleMenu}>X Close</span>
          </li>
            <li className="item">
              <Link  to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
          </li>
          <li className="item">
              <a
               
                href="https://www.geektrust.in/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Geek Trust
              </a>
            </li>
            </ul>
      </div>
    </header>
  );
}

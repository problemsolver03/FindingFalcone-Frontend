import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';
import NavItem from './NavItem';
import MobileMenu from './MobileMenu'

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
            
            <NavItem className="nav-item">
             <Link className="nav-link" to="/">
                Home 
              </Link>
            </NavItem>
            <NavItem url="https://www.geektrust.in/" text="Geek Trust" className="nav-item" />
           
          </ul>
        </div>
      </nav>

      <div className={`mobileMenu ${!mobile ? "hide" : 'show'}`}>
        <MobileMenu toggleMenu={toggleMenu}/>
      </div>
    </header>
  );
}

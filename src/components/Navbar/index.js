import React from "react";
import "./style.css";

// Navbar function sets current page on click for About, Portfolio, Resume, and Contact
function Navbar({ currentPage, setCurrentPage }) {
  return (
    <div className='nav'>
      <div className='left'>
        <ul className='nav nav-main'>
          <li className='nav-item'>
            <a
              href='#about'
              onClick={() => setCurrentPage("About")}
              className={
                currentPage === "About" ? "nav-link active" : "nav-link"
              }
            >
              About Me
            </a>
          </li>
          <li className='nav-item'>
            <a
              href='#portfolio'
              onClick={() => setCurrentPage("Portfolio")}
              className={
                currentPage === "Portfolio" ? "nav-link active" : "nav-link"
              }
            >
              Portfolio
            </a>
          </li>
          <li className='nav-item'>
            <a
              href='#resume'
              onClick={() => setCurrentPage("Resume")}
              className={
                currentPage === "Resume" ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </a>
          </li>
          <li className='nav-item'>
            <a
              href='#contact'
              onClick={() => setCurrentPage("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className='right'>
        <ul>
          <li className='nav-tagline'>Boundless possibilities.</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

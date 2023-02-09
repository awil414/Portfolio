import React from "react";
import Navbar from "../Navbar";

// Function for Header with setCurrentPage and Navbar
function Header({ setCurrentPage }) {
  return (
    <div className='header-nav'>
      <div className='header'>
        <div className='right'>
          <p className='nav-tagline'>Amber Wilson</p>
        </div>
      </div>
      <Navbar setCurrentPage={setCurrentPage} />
    </div>
  );
}
export default Header;

import React from "react";
import "./style.css";
import { BiHome } from "react-icons/bi";
import { GrDocumentText } from "react-icons/gr";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { BsFillFilePersonFill } from "react-icons/bs";

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
              <BiHome style={{ marginBottom: '3px' }} />
             /About Me
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
              <MdOutlinePhotoSizeSelectActual style={{ marginBottom: "3px" }} />
              /Portfolio
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
              <GrDocumentText style= {{ marginBottom: '3px' }} />
              /Resume
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
              <BsFillFilePersonFill style={{ marginBottom: "3px" }}/>
              /Contact
            </a>
          </li>
        </ul>
      </div>
      
    </div>
  );
}

export default Navbar;

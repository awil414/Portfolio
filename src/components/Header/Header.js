import React from "react";
import Navbar from "../Navbar";

// Styling for Navbar, header and skills
const styles = {
  // navHeader: {
  //   background: "#0096FF",
  // },
  // headerStyle: {
  //   background: "#0096FF",
  // },
  // headingStyle: {
  //   fontSize: "40px",
  //   textAlign: "center",
  //   verticalAlign: "middle",
  //   lineHeight: "90px",
  //   color: "white",
  //   padding: "10px",
  //   marginBottom: "0",
  // },
  skillsStyle: {
    fontSize: "20px",
    textAlign: "center",
    verticalAlign: "middle",
    color: "white",
  },
};

// Function for Header with setCurrentPage and Navbar
function Header({ setCurrentPage }) {
  return (
    <div className='header-nav'>
      <div className='header'>
        <div className='right'>
          {/* <ul>
            <li className='nav-tagline'>AW.</li>
          </ul> */}
          <p className='nav-tagline'>Amber Wilson</p>
        </div>
        {/* <span>
          <h2 style={styles.headingStyle}>portfolio of Amber Wilson</h2>
          <p style={styles.skillsStyle}>
            Full-Stack Developer | JavaScript | MongoDB | Express | React | Node
            |
          </p>
        </span> */}
      </div>
      <Navbar setCurrentPage={setCurrentPage} />
      
    </div>
  );
}
export default Header;

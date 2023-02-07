import React from "react";
import Navbar from "../Navbar";

// Styling for Navbar, header and skills
const styles = {
  navHeader: {
    background: "#0096FF",
  },
  headerStyle: {
    background: "#0096FF",
  },
  headingStyle: {
    fontSize: "40px",
    textAlign: "center",
    verticalAlign: "middle",
    lineHeight: "90px",
    color: "white",
    padding: "10px",
    marginBottom: "0",
  },
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
    <div style={styles.navHeader} className='header-nav'>
      {/* <div style={styles.headerStyle} className='header'>
        <span>
          <h2 style={styles.headingStyle}>portfolio of Amber Wilson</h2>
          <p style={styles.skillsStyle}>
            Full-Stack Developer | JavaScript | MongoDB | Express | React | Node
            |
          </p>
        </span>
      </div> */}
      <Navbar setCurrentPage={setCurrentPage} />
    </div>
  );
}
export default Header;

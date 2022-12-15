import  React, { useState } from 'react';
import '../styles/Navbar.css';

const styles = {
  navbarStyle: {
    background: '#9bc4cb',
    justifyContent: 'flex-end',
  },
};

function Navbar() {
    const [showNavSecond, setShowNavSecond] = useState(false);
    return (
        <nav style={styles.navbarStyle} className="navbar">
          <ul id='navs' className='navs'>
            <li className='main'><a href="https://github.com/awil414">Amber Wilson</a></li>
            <li><a className='smoothscroll' href='/about'>About</a></li>
            <li><a className='smoothscroll' href='/portfolio'>Portfolio</a></li>
            <li><a className='smoothscroll' href='/contact'>Contact Me</a></li>
            <li><a className='smoothscroll' href='/resume'>Resume</a></li>
          </ul>
        </nav>
      );
}

export default Navbar;
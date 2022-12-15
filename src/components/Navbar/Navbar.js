import  React, { useState } from 'react';
import { NavItems } from './NavItems';
import '../styles/Navbar.css';

const styles = {
  navsStyle: {
    background: '#9bc4cb',
    justifyContent: 'flex-end',
  },
};

function Navbar() {
    const [showNavSecond, setShowNavSecond] = useState(false);
    return (
      <nav style={styles.navStyle} className="NavbarItems">
        <h1
        className='navbar-main'>Amber Wilson<i className='fab fa-react'></i>
        </h1>
        <div className='nav-icon'>

        </div>
        <ul>
          {NavItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            )
          })}
        </ul>
      
    </nav>
  );
}

      
        
export default Navbar;
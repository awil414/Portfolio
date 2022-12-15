import  React, { Component } from 'react';
import { NavItems } from './NavItems';
// import '../styles/Navbar.css';

const styles = {
  navbarStyle: {
    background: 'linear-gradient(to right, rgba(179,220,237,1) 0%, rgba(41,184,229,1) 50%, rgba(188,224,238,1) 100%)',
    height: '80px',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    fontSize: '20px',
  },
};

class Navbar extends Component() {
  
    state = { active: false }

    handleClick = () => {
      this.setState({ active: !this.state.active })
    }

    render() {
      return (
        <nav style={styles.navbarStyle} className="NavbarItems">
          <h1
          className='navbar-main'>Amber Wilson<i className='fab fa-react'></i>
          </h1>
          <div className='nav-icon' onClick={this.handleClick}>
            <i className={this.state.active ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <ul className={this.state.active ? 'nav-menu active' : 'nav-menu'}>
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
}
      
export default Navbar;
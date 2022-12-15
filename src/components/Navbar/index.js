import React, { useState } from 'react';
import style from './style.css';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBBreadcrumb,
  MDBBreadcrumbItem
} from 'mdb-react-ui-kit';

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

export default function Navbar() {
  const [showNavText, setShowNavText] = useState(false);

  return (
    <MDBNavbar fixed='top' expand='lg' style={styles.navbarStyle}>
      <MDBContainer fluid>
        <MDBNavbarBrand className='linkMain'href='#'>Amber Wilson</MDBNavbarBrand>
        {/* <nav aria-label='breadcrumb'>
          <MDBBreadcrumb>
            <MDBBreadcrumbItem>
              <a href='#'>About Amber</a>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem>
              <a href='#'>Projects</a>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem active aria-current='page'>
              <a href='#'>Contact</a>
            </MDBBreadcrumbItem>
          </MDBBreadcrumb>
        </nav> */}
        {/* <MDBNavbarToggler
          type='button'
          data-target='#navbarText'
          aria-controls='navbarText'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavText(!showNavText)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler> */}
        <MDBCollapse navbar show={showNavText}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink className='linkText' active aria-current='page' href='#'>
                About Amber
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink className='linkText' href='#'>Projects</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink className='linkText' href='#'>Contact</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
          {/* <span className='navbar-text'> Amber Wilson </span> */}
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

// import  React, { useState } from 'react';
// import './style.css';

// const styles = {
//     navbarStyle: {
//       background: 'linear-gradient(to right, rgba(179,220,237,1) 0%, rgba(41,184,229,1) 50%, rgba(188,224,238,1) 100%)',
//       height: '80px',
//       display: 'flex',
//       justifyContent: 'flex-end',
//       alignItems: 'center',
//       fontSize: '20px',
//     },
//   };

// function Navbar() {
//   // Declare a state variable `greeting` using `useState`
//   // Give the method to update it a name, `setGreeting`
//   // useState accepts one argument for the default or initial value of the state variable. In our case, we set it to "Welcome the following students to class!".
//   // greeting is getter, setGreeting is getter (variable and function)

//   // Convert `group` to a state variable using the `useState` hook.
//   // Set to an initial value to an array including three students in your class. (ex. ["John", "Grace", "Jared"])
//   const [navigation, setNavigation] = useState(['About Amber', 'Portfolio', 'Contact']);

//   return (
//     <div style={styles.navbarStyle}><a href='https://github.com/awil414'><h1 className='nav-main'>Amber Wilson</h1></a>
    
//       <ul>
//           {/* Render each member from the `group` array */}
//           <li>{navigation[0]}</li>
//           <li>{navigation[1]}</li>
//           <li>{navigation[2]}</li>
//         </ul>
//       </div>
  
//   );
// }

// export default Navbar;

// // import Container from 'react-bootstrap/Container';
// // import Nav from 'react-bootstrap/Nav';
// // import Navbar from 'react-bootstrap/Navbar';

// // // import { NavItems } from './NavItems';


// // // const styles = {
// // //   navbarStyle: {
// // //     background: 'linear-gradient(to right, rgba(179,220,237,1) 0%, rgba(41,184,229,1) 50%, rgba(188,224,238,1) 100%)',
// // //     height: '80px',
// // //     display: 'flex',
// // //     justifyContent: 'flex-end',
// // //     alignItems: 'center',
// // //     fontSize: '20px',
// // //   },
// // // };

// // function Navigation() {
// //   return (
// //       <Navbar fixed='top' bg="primary" variant="dark">
// //         <Container>
// //           <Navbar.Brand href="#home">Amber Wilson</Navbar.Brand>
// //           <Nav className="me-auto">
// //             <Nav.Link href="#about">About Amber</Nav.Link>
// //             <Nav.Link href="#portfolio">Portfolio</Nav.Link>
// //             <Nav.Link href="#contact">Contact</Nav.Link>
// //           </Nav>
// //         </Container>
// //       </Navbar>
      
// //   );
// // }

// // export default Navigation;

// // function Navbar() {
// //   const [navbar, setNavbar] = useState;

// //     handleClick = () => {
// //       this.setState({ active: !this.state.active })
// //     }
// //       return (
// //         <nav style={styles.navbarStyle} className="NavbarItems">
// //           <h1
// //           className='navbar-main'>Amber Wilson<i className='fab fa-react'></i>
// //           </h1>
// //           <div className='nav-icon' onClick={this.handleClick}>
// //             <i className={this.state.active ? 'fas fa-times' : 'fas fa-bars'}></i>
// //           </div>
// //           <ul className={this.state.active ? 'nav-menu active' : 'nav-menu'}>
// //             {NavItems.map((item, index) => {
// //               return (
// //                 <li key={index}>
// //                   <a className={item.cName} href={item.url}>
// //                     {item.title}
// //                   </a>
// //                 </li>
// //               )
// //             })}
// //           </ul>
      
// //         </nav>
// //       );
// //     }

      
// // export default Navbar;
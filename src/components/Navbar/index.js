import React, { useState } from 'react';
import style from './style.css';

function Navbar({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-main">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default Navbar;

// import {
//   MDBNavbar,
//   MDBContainer,
//   MDBNavbarBrand,
//   MDBIcon,
//   MDBNavbarNav,
//   MDBNavbarItem,
//   MDBNavbarLink,
//   MDBNavbarToggler,
//   MDBCollapse,
  
// } from 'mdb-react-ui-kit';

// const styles = {
//       navbarStyle: {
//         background: 'linear-gradient(to right, rgba(179,220,237,1) 0%, rgba(41,184,229,1) 50%, rgba(188,224,238,1) 100%)',
//         height: '80px',
//         display: 'flex',
//         justifyContent: 'flex-end',
//         alignItems: 'center',
//         fontSize: '20px',
//       },
//     };

// export default function Navbar() {
//   const [showNavText, setShowNavText] = useState(false);

//   return (
//     <MDBNavbar fixed='top' expand='lg' style={styles.navbarStyle}>
//       <MDBContainer fluid>
//         <MDBNavbarBrand className='linkMain'href='#'>Amber Wilson</MDBNavbarBrand>
        
//         {/* <MDBNavbarToggler
//           type='button'
//           data-target='#navbarText'
//           aria-controls='navbarText'
//           aria-expanded='false'
//           aria-label='Toggle navigation'
//           onClick={() => setShowNavText(!showNavText)}
//         >
//           <MDBIcon icon='bars' fas />
//         </MDBNavbarToggler> */}
//         <MDBCollapse navbar show={showNavText}>
//           <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
//             <MDBNavbarItem>
//               <MDBNavbarLink className='linkText' active aria-current='page' href='#'>
//                 About Amber
//               </MDBNavbarLink>
//             </MDBNavbarItem>
//             <MDBNavbarItem>
//               <MDBNavbarLink className='linkText' href='#'>Projects</MDBNavbarLink>
//             </MDBNavbarItem>
//             <MDBNavbarItem>
//               <MDBNavbarLink className='linkText' href='#'>Contact</MDBNavbarLink>
//             </MDBNavbarItem>
//           </MDBNavbarNav>
//           {/* <span className='navbar-text'> Amber Wilson </span> */}
//         </MDBCollapse>
//       </MDBContainer>
//     </MDBNavbar>
//   );
// }



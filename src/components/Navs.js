import  React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse
} from 'mdb-react-ui-kit';

function Navs() {
    const [showNavSecond, setShowNavSecond] = useState(false);
    return (
      // <div>
      //   <Header className='header bg-info'>
      //       <a href='https://github.com/awil414'><h1 className='text-white'>Amber Wilson</h1></a>
      //   </div>
        <MDBNavbar expand='lg' light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>Navbar</MDBNavbarBrand>
          <MDBNavbarToggler
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavSecond(!showNavSecond)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNavSecond}>
            <MDBNavbarNav>
              <MDBNavbarLink active aria-current='page' href='#'>
                About Me
              </MDBNavbarLink>
              <MDBNavbarLink href='#'>Portfolio</MDBNavbarLink>
              <MDBNavbarLink href='#'>Contact</MDBNavbarLink>
              <MDBNavbarLink href='#'>Resume</MDBNavbarLink>
              <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                Disabled
              </MDBNavbarLink>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    );
}
export default Navs;
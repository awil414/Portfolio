import React from 'react';
import Navs from './Navbar';

function Header() {
    return (
        <header className='header bg-info'>
            <Navs /> 
            {/* //<a href='https://github.com/awil414'><h1 className='text-white'>Amber Wilson</h1></a>// */}
        </header>
        
    );
}
export default Header;
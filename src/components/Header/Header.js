import React from 'react';
import Navbar from '../Navbar';


const styles = {
    navHeader: {
        background: '#463320',
    },
    headerStyle: {
        background: '#16569B',
    },
    headingStyle: {
        fontSize: '40px',
        textAlign: 'center',
        verticalAlign: 'middle',
        lineHeight: '90px',  
        color: 'white',
        padding: '10px',
    },
};


function Header({setCurrentPage}) {
    return (
        <div style={styles.navHeader} className='header-nav'>
            <div style={styles.headerStyle} className='header'>
                <span><h1 style={styles.headingStyle}>portfolio of Amber Wilson</h1></span></div> 
            <Navbar  setCurrentPage={setCurrentPage}/> 
        </div>
        
    );
}
export default Header;
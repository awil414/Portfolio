import React from 'react';
import Navbar from '../Navbar';


const styles = {
    navHeader: {
        background: '#6a994e',
    },
    headerStyle: {
        background: '#3E5E82',
    },
    headingStyle: {
        fontSize: '40px',
        textAlign: 'center',
        verticalAlign: 'middle',
        lineHeight: '90px',  
        color: 'white',
        padding: '10px',
        marginBottom: '0'
    },
    skillsStyle: {
        fontSize: '20px',
        textAlign: 'center',
        verticalAlign: 'middle',
        // lineHeight: '90px',  
        color: 'white',
        // padding: '10px',
        
        
    },

};


function Header({setCurrentPage}) {
    return (
        <div style={styles.navHeader} className='header-nav'>
            <div style={styles.headerStyle} className='header'>
                <span>
                    <h2 style={styles.headingStyle}>portfolio of Amber Wilson</h2>
                    <p style={styles.skillsStyle}>Full-Stack Developer | JavaScript | Node | Express | MongoDB | React |</p>
                </span></div> 
            <Navbar  setCurrentPage={setCurrentPage}/> 
        </div>
        
    );
}
export default Header;
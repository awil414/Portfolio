import React from 'react';
import Project from '../../components/Project.js';
import goalE from '../../images/Projects/goalE.png';
import {
    MDBContainer,
    MDBRow,
    MDBCol
  } from 'mdb-react-ui-kit';

function Portfolio() {
    return (
        <MDBContainer fluid className='portfolio-page'>
            {/* portfolio
            <Project title={'Project1'} description={'hello'} />
            <Project title={'Project2'} description={'hello'} /> */}
            <h1 className='portfolio-header'>My Work</h1>
            <p>Check out my latest projects.</p>
            <MDBRow style={{ justifyContent: 'center', paddingBottom: '10px' }}>
                <MDBCol md={6} className='project-card'>
                    <Project
                        imgPath={goalE}
                        title='Goal-E'
                        description='App to set, update, and keep or delete personal goals.'
                        ghLink=''
                        demoLink=''
                    />
                </MDBCol>

            </MDBRow>

        </MDBContainer>
    );
}

export default Portfolio;
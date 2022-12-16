import React, { useState } from 'react';
import Navbar from './Navbar';
import About from '../pages/About';
import Project from './Project';
import Resume from '../pages/Resume';
import Contact from '../pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Header');

  // Checking to see what the value of currentPage is and returning the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Project') {
        return <Project />;
      }
    if (currentPage === 'Resume') {
      return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>

      {/* passing the currentPage from state and the function to update it */}
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* calling the renderPage to return a component */}
      {renderPage()}
    </div>
  );
}};

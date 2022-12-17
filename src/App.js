import React from 'react';
import BgImage from './images/backgroundimg.jpeg'
import Header from './components/Header/Header';
// import PortfolioContainer from './components/PortfolioContainer';
import Footer from './components/Footer';
import {useState} from 'react'
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('About');

  // Checking to see what the value of currentPage is and returning the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }
    if (currentPage === 'Resume') {
      return <Resume />;
  };
}
  // Old version
  /*
    <div className='App'> 
      <Header setCurrentPage={setCurrentPage}/> 
      <div 
      // className='bg-img'
      // style= {{
      //   backgroundImage: `url(${BgImage})`
      // }}
      >
      
      {renderPage()}
      </div>
     
       <PortfolioContainer /> 
      {/* <Footer />
      </div>
  */

  return (
    <div className='App'> 
      <Header setCurrentPage={setCurrentPage}/>
      
      {renderPage()}
     
      {/* <PortfolioContainer /> */}
      {/* <Footer /> */}
    </div>
  )
};

export default App;

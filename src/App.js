import React from 'react';
import Header from './components/Header/Header';
import PortfolioContainer from './components/PortfolioContainer';
import Footer from './components/Footer';


function App() {
  return (
    <div className='App'> 
      <Header /> 
      <img src='images/backgroundimg.jpeg' className='bg-img' alt=''></img>
      {/* <PortfolioContainer />
      <Footer /> */}
    </div>
  )
};

export default App;

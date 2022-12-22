import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  // Checking to see what the value of currentPage is and returning the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
  };

  return (
    <div className='App'>
      <Header setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;

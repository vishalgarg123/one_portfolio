import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Experience from "./Components/Experience";
import SocialLinks from "./Components/SocialLinks";
import Contacts from "./Components/Contacts";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contacts />
      <Footer/>
      <SocialLinks />
    </>
  );
};

export default App;

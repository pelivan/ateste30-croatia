import React, { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import InfoPage from "../components/InfoPage";
import InfoPageTwo from "../components/InfoPageTwo";
import Sidebar from "../components/Sidebar";
import { homeObjOne } from "../components/InfoPage/Data";
import { homeObjTwo } from "../components/InfoPageTwo/Data";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggleOpen} />
      <Header toggle={toggleOpen} />
      <Hero />
      <InfoPage {...homeObjOne} />
      <InfoPageTwo {...homeObjTwo} />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;

import React, { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import InfoPage from "../components/InfoPage";
import Sidebar from "../components/Sidebar";
import { homeObjOne } from "../components/InfoPage/Data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggleOpen} />
      <Header toggle={toggleOpen} />
      <Hero />
      <InfoPage {...homeObjOne} />
    </>
  );
};

export default Home;

import React, { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";

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
    </>
  );
};

export default Home;

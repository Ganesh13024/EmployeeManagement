import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import Navbar from './Navbar';
import Hero from './Hero';
import Analystics from './Analystics';
import Newsletter from './Newsletter';
import Cards from './Cards';
import Footer from './Footer';

const Mainpage = () => {
  return (
    <>
      <div className="bg-black h-screen w-screen ">
        <Navbar/>
        <Hero/>
        <Analystics/>
        <Newsletter/>
        <Cards/>
        <Footer/>
      </div>
    </>
  );
};

export default Mainpage;
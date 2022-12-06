import React from "react";
import NavMenu from "../NavMenu/NavMenu";
import Banner from "../Banner/Banner";
import AboutUs from "../AboutUs/AboutUs";
import Cars from "../Cars/Cars";
import Reviews from "../Reviews/Reviews";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <NavMenu />
      <Banner />
      <AboutUs />
      <Cars />
      <Reviews />
      <Footer />
    </>
  );
};

export default Home;

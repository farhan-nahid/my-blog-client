import React from "react";
import Blogs from "../Components/HomeComponents/Blogs/Blogs";
import Footer from "../Components/SharedComponents/Footer/Footer";
import NavBar from "../Components/SharedComponents/NavBar/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <Blogs />
      <Footer />
    </>
  );
};

export default Home;

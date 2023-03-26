import React from "react";
import Faq from "../components/Faq/Faq";
import ResponsiveAppBar from "../components/Navbar/Navbar";
// import Footer from "../components/Footer/Footer";
import Stepper from "../components/Stepper/Stepper";
import WishlistCreator from "../components/WishlistCreator/WishlistCreator";

const Home = () => {
  return (
    <>
      <ResponsiveAppBar />
      <WishlistCreator />
      <Stepper />
      <Faq />
      {/* <Footer /> */}
    </>
  );
};

export default Home;

import React from "react";
import Header from "./Header.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Cards.jsx";
import Footer from "./Footer.jsx";

const Home = () => {
  return (
    <div className="Home text-center">
      <Header />
      <Jumbotron/>
      <Card />
      <Footer />
    </div>
  );
};

export default Home;

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
      <Card  title = "Card title" text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat quam nesciunt illo, illum eveniet, iure mollitia provident molestias, natus deleniti amet! Sit distinctio quisquam laboriosam aliquam iste id, voluptates molestiae!" btn =" Go somewhere"/>
      <Footer />
    </div>
  );
};

export default Home;

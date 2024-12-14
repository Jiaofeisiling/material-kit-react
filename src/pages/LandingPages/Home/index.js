import React from "react";
import Navbar from "./components/Navbar/Navbar";
import FunctionBar from "./components/FunctionBar/FunctionBar";
import TransactionList from "./components/TransactionList/TransactionList";
import Footer from "./components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <FunctionBar />
      <TransactionList />
      <Footer />
    </div>
  );
};

export default Home;

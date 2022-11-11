import Aside from "../../components/aside/Aside";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Main from "../../components/main/Main";
import Footer from "../../components/footer/Footer";
import './Home.css';
import React from 'react';


const Home = () => {
  return (
    <div className="home">
        <Header title="Home"/>
        <Navbar />
      <Aside />
      <Main text="Página Home "/>
        <Footer />
    </div>
  )
}

export default Home;

import Aside from "../../components/aside/Aside";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Main from "../../components/main/Main";
import Footer from "../../components/footer/Footer";
import React from 'react';

const About = () => {
  return (
    <div>
        <Header title="About"/>
        <Navbar />
        <div className="d-flex flex-row">
          <Aside />
          <Main text="Página About "/>

        </div>
        <Footer />
    </div>
  )
}

export default About;
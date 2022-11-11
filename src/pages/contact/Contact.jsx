import Aside from "../../components/aside/Aside";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Main from "../../components/main/Main";
import Footer from "../../components/footer/Footer";
import React from 'react';

const Contact = () => {
  return (
    <div>
        <Header title="Contacto"/>
        <Navbar />
        <div className="d-flex flex-row">
          <Aside />
          <Main text="Página Contact "/>

        </div>
        <Footer />
    </div>
  )
}

export default Contact;
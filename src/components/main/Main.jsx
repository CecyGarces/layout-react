import React from 'react';
import Botonclick from '../botonclick/Botonclick';
import './Main.css';


const Main = ({text}) => {
  return (
    <div className="main">
      <h1 className="d-flex flex-row">{text}</h1>
      <div className="d-flex flex-row">
      <Botonclick param1="agregar" param2="Agregar"/>
      <Botonclick param1="eliminar" param2="Eliminar"/>
      <Botonclick param1="modificar" param2="Modificar"/>
      </div>
      
    </div>
  )
}

export default Main;

import React from 'react';
import './Botonclick.css';

const Botonclick=({param1,param2}) => {
  return (
     <button className={ param1 }> { param2 }</button>
  )
}

export default Botonclick;
import { Routes, Route } from 'react-router-dom';

import Home from "../src/pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
 
function App() {
  return (
    <>
    <Routes>
      <Route path= "/" element={<Home/>}/>
      <Route path= "/about" element={<About/>}/>
      <Route path= "/contact" element={<Contact/>}/>
    </Routes>
    </>
  );
}

export default App;

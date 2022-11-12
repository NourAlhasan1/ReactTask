import React from 'react'
import Nav from './components/nav/Nav';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';
import About from './components/About';
import Home from "./components/Home";
import {BrowserRouter} from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
function App() {
  return (  <>
  
      
        <div> <Nav/></div>
       <div> <Body/></div> 
       <div  class="h-5"> <Footer/></div> 
      
 <BrowserRouter> 
     <Routes>
      <Route path="/" element={< Home />}/>
      <Route path="/about" element={< About />}/>
     
    </Routes>
    
  </BrowserRouter> 
  </>

 )
}

export default App
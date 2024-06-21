import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import LandingPage from "./Components/Top"

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Merienda:wght@400;700&display=swap');

  body {
    font-family: 'Merienda', cursive;
  }
`;
export default function App(){
  

    return(<>
    

   <BrowserRouter>
    <Routes>
        
        <Route  path="/" element={<LandingPage/>}></Route> 
        <Route  path="/nosotros" element={<LandingPage/>}></Route> 
     
       
    </Routes>    
    </BrowserRouter>
   
    
    </>)
}
//  <Route  path="/home/:idDaOption" element={<OptionScreen/>}></Route> 
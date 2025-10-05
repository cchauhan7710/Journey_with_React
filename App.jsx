import React from "react";
import Navbar from "./Components/Navbar";
import About from "./Constraints/About";
import Services from "./Constraints/Services"


function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-[#14001B]   to-[#88148E] via-[#14021f] text-white font-poppins">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')] opacity-20 pointer-events-none"></div>
      <div className="flixed top-0 -z-10 h-full w-full"></div>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className=" container mx-auto px-8">
        {" "}
        <Navbar />
       
      </div>
       <div >
        {" "}
        <About/>
        <Services/>
       
      </div>
    
       
    </div>
    
  );
}

export default App;

import React from "react";
import NavBar from "./Component/1-NavBar/NavBar";
import Hero from "./Component/2-Hero/Hero";
import Top_Hero from "./Component/2-Hero/Sections/Top_Hero";
import Mid_sliders from "./Component/2-Hero/Sections/Mid_sliders";
import Footer from "./Component/3-Footer/Footer";

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Top_Hero/>
      <Mid_sliders/>
      <Footer/>
    </div>
  );
};

export default App;

import React from "react";
import { Helmet } from "react-helmet";
import Navigation from "./components/Navigation";
import ControlledCarousel from "./components/home/ControlledCarousel";
import Section2 from "./components/home/Section2";
import Section3 from "./components/home/Section3";
import Section4 from "./components/home/Section4";
import SectionSubscribe from "./components/SectionSubscribe";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Helmet>
        <title>Air Stair Solutions | Home</title>
        <meta name="description" content="" />
        <meta
          name="keywords"
          content="lift chair, wheelchair lift airplanes, handicap lift chair for airplanes"
        />
      </Helmet>
      <Navigation></Navigation>
      <ControlledCarousel></ControlledCarousel>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
      <SectionSubscribe></SectionSubscribe>
      <Footer></Footer>
    </div>
  );
}

export default App;

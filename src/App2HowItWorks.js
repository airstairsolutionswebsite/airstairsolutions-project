import React from "react";
import { Helmet } from "react-helmet";
import Navigation from "./components/Navigation";
import EachPageHeader from "./components/EachPageHeader";
import Section1 from "./components/app2/Section1";
import Section2 from "./components/app2/Section2";
import Section3 from "./components/app2/Section3";
import Section4 from "./components/app2/Section4";
import SectionSubscribe from "./components/SectionSubscribe";
import Footer from "./components/footer/Footer";
class App2 extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Air Stair Solutions | AeroChair&#8482;</title>
          <meta name="description" content="" />
          <meta
            name="keywords"
            content="wheelchair lift airplanes, handicap lift chair for airplanes"
          />
        </Helmet>
        <Navigation></Navigation>
        <EachPageHeader pageNAME="AEROCHAIR&#8482;"></EachPageHeader>
        <Section1></Section1>
        <Section2></Section2>
        <Section3></Section3>
        <Section4></Section4>
        <SectionSubscribe></SectionSubscribe>
        <Footer></Footer>
      </div>
    );
  }
}
export default App2;

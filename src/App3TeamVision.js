import React from "react";
import { Helmet } from "react-helmet";
import Navigation from "./components/Navigation";
import EachPageHeader from "./components/EachPageHeader";
import Section1 from "./components/app3/Section1";
import SectionSubscribe from "./components/SectionSubscribe";
import Footer from "./components/footer/Footer";
class App3 extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Air Stair Solutions | Team & Vision</title>
          <meta name="description" content="" />
          <meta name="keywords" content="stair chair lift, wheelchair lift airplanes, handicap lift chair for airplanes" />
        </Helmet>
        <Navigation></Navigation>
        <EachPageHeader pageNAME="TEAM AND VISION"></EachPageHeader>
        <Section1></Section1>
        <SectionSubscribe></SectionSubscribe>
        <Footer></Footer>
      </div>
    );
  }
}
export default App3;

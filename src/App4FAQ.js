import React from "react";
import { Helmet } from "react-helmet";
import Navigation from "./components/Navigation";
import EachPageHeader from "./components/EachPageHeader";
import Section1 from "./components/app4/Section1";
import SectionSubscribe from "./components/SectionSubscribe";
import Footer from "./components/footer/Footer";
class App4 extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Air Stair Solutions | FAQ</title>
          <meta name="description" content="" />
          <meta name="keywords" content="stair chair, wheelchair lift airplanes, handicap lift chair for airplanes" />
        </Helmet>
        <Navigation></Navigation>
        <EachPageHeader pageNAME="FAQ"></EachPageHeader>
        <Section1></Section1>
        <SectionSubscribe></SectionSubscribe>
        <Footer></Footer>
      </div>
    );
  }
}
export default App4;

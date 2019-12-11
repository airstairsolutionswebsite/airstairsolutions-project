import React from "react";
import { Helmet } from "react-helmet";
import Navigation from "./components/Navigation";
import EachPageHeader from "./components/EachPageHeader";
import Section1 from "./components/app7/Section1";
import Footer from "./components/footer/Footer";
class App8PricingRequest extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Air Stair Solutions | Specs And Warranty</title>
          <meta name="description" content="" />
          <meta name="keywords" content="chair lift , wheelchair lift airplanes, handicap lift chair for airplanes" />
        </Helmet>
        <Navigation></Navigation>
        <EachPageHeader pageNAME="SPECS AND WARRANTY"></EachPageHeader>
        <Section1></Section1>
        <Footer></Footer>
      </div>
    );
  }
}
export default App8PricingRequest;

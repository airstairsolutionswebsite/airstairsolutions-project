import React from "react";
import { Helmet } from "react-helmet";
import Navigation from "./components/Navigation";
import EachPageHeader from "./components/EachPageHeader";
import Section1 from "./components/app8/Section1";
import Footer from "./components/footer/Footer";
class App8PricingRequest extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Air Stair Solutions | Pricing Request</title>
          <meta name="description" content="" />
          <meta name="keywords" content="wheelchair lift airplanes, handicap lift chair for airplanes" />
        </Helmet>
        <Navigation></Navigation>
        <EachPageHeader pageNAME="PRICING REQUEST"></EachPageHeader>
        <Section1></Section1>
        <Footer></Footer>
      </div>
    );
  }
}
export default App8PricingRequest;

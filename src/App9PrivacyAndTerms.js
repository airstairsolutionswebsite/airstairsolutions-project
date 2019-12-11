import React from "react";
import { Helmet } from "react-helmet";
import Navigation from "./components/Navigation";
import EachPageHeader from "./components/EachPageHeader";
import Section1 from "./components/app9/Section1";
import Footer from "./components/footer/Footer";
class App9PrivacyAndTerms extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Air Stair Solutions | Privacy & Terms</title>
          <meta name="description" content="" />
          <meta name="keywords" content="wheelchair lift airplanes, handicap lift chair for airplanes" />
        </Helmet>
        <Navigation></Navigation>
        <EachPageHeader pageNAME="PRIVACY AND TERMS"></EachPageHeader>
        <Section1></Section1>
        <Footer></Footer>
      </div>
    );
  }
}
export default App9PrivacyAndTerms;

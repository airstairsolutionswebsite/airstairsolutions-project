import React from "react";
import { Helmet } from "react-helmet";
import Navigation from "./components/Navigation";
import EachPageHeader from "./components/EachPageHeader";
import Section1 from "./components/app5cargo/Section1";
import ControlledTabs from "./components/app5cargo/ControlledTabs";
import SectionSubscribe from "./components/SectionSubscribe";
import MovedSection from "./components/app5cargo/MovedSection";
import Footer from "./components/footer/Footer";
class App5 extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Air Stair Solutions | Products</title>
          <meta name="description" content="" />
          <meta
            name="keywords"
            content="cargo loader, wheelchair lift airplanes, handicap lift chair for airplanes"
          />
        </Helmet>
        <Navigation></Navigation>
        <EachPageHeader pageNAME="Cargo Loader"></EachPageHeader>
        <Section1></Section1>
        <MovedSection></MovedSection>
        <ControlledTabs></ControlledTabs>
        <SectionSubscribe></SectionSubscribe>
        <Footer></Footer>
      </div>
    );
  }
}
export default App5;

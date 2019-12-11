import React from "react";
import { Helmet } from "react-helmet";
import Navigation from "./components/Navigation";
import EachPageHeader from "./components/EachPageHeader";
import ContactForm from "./components/app6/ContactForm";
import SectionSubscribe from "./components/SectionSubscribe";
import Footer from "./components/footer/Footer";
class App6 extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Air Stair Solutions | Contact</title>
          <meta name="description" content="" />
          <meta name="keywords" content="contact airstair, wheelchair lift airplanes, handicap lift chair for airplanes" />
        </Helmet>
        <Navigation></Navigation>
        <EachPageHeader pageNAME="CONTACT"></EachPageHeader>
        <ContactForm></ContactForm>
        <SectionSubscribe></SectionSubscribe>
        <Footer></Footer>
      </div>
    );
  }
}
export default App6;

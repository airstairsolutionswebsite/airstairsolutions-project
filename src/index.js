import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom";
import Analytics from "react-router-ga";
import ScrollToTop from "./fcomponents/ScrollToTop";
import "./index.scss";
import AppHome from "./AppHome";
import App2HowItWorks from "./App2HowItWorks";
import App3TeamVision from "./App3TeamVision";
import App4FAQ from "./App4FAQ";
import App5ProductAeroChair from "./App5ProductAeroChair";
import App5ProductCargoLoader from "./App5ProductCargoLoader";
import App6Contact from "./App6Contact";

import App7SpecsAndWarranty from "./App7SpecsAndWarranty";
import App8PricingRequest from "./App8PricingRequest";
import App9PrivacyAndTerms from "./App9PrivacyAndTerms";

import * as serviceWorker from "./serviceWorker";

import "bootstrap/dist/css/bootstrap.min.css";

const routing = (
  // <HashRouter basename={process.env.PUBLIC_URL}>
  <HashRouter basename={"/"}>
    <Analytics id="UA-154413520-1" debug>
      <ScrollToTop />
      <Route exact path="/" component={AppHome} />
      <Route path="/how-it-works" component={App2HowItWorks} />
      <Route path="/team-and-vision" component={App3TeamVision} />
      <Route path="/faq" component={App4FAQ} />
      <Route path="/aero-chair" component={App5ProductAeroChair} />
      <Route path="/cargo-loader" component={App5ProductCargoLoader} />
      <Route path="/contact" component={App6Contact} />
      <Route path="/specsandwarranty" component={App7SpecsAndWarranty} />
      <Route path="/pricingrequest" component={App8PricingRequest} />
      <Route path="/privacyandterms" component={App9PrivacyAndTerms} />
    </Analytics>
  </HashRouter>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from "react";
import "./App.css";
import Head from "./head.js";
import HeadBanner from "./headBanner.js";
import Hero from "./hero.js";
import Sales from "./sales.js";
import Publicity from "./publicity.js";
import Information from "./information.js";
import Contact from "./contact.js";

function App() {
  return (
    <>
      <HeadBanner />
      <Head />
      <Hero />
      <Sales />
      <Publicity />
      <Information />
      <Contact />
    </>
  );
}

export default App;

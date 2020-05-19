import React from "react";
import "./App.css";
import Head from "./head.js";
import HeadBanner from "./headBanner.js";
import Hero from "./hero.js";
import Sales from "./sales.js";

function App() {
  return (
    <>
      <HeadBanner />
      <Head />
      <Hero />
      <Sales />
    </>
  );
}

export default App;

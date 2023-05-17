import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Project from "./Project";
import Career from "./Career";
import Contact from "./Contact";
import Scroll from "./components/Scroll";
import { Element } from "react-scroll";

import "./styles/App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <Header />
          <Hero />
          <About />
          <Project />
          <Career />
          <Contact />
          <Scroll />
        </div>
      </div>
    </>
  );
}

export default App;

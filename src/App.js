import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Project from "./Project";
import "./styles/App.css";

import { Chrono } from "react-chrono";

import { data } from "./CareerData";

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <Header />
          <Hero />
          <About />
          <Project />
          <div className="col-lg-8 col-md-12 project">
            <div className="career-wrapper">
              <div className="career-title fadein">
                <div className="title">
                  <h2>my career</h2>
                </div>
              </div>
              <div className="career-content">
                <Chrono
                  items={data}
                  mode="VERTICAL"
                  contentDetailsHeight="300"
                  // hideControls="true"
                  activeItemIndex="999"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

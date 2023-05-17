import React from "react";
import vanPark from "./images/Vancouver-Park.png";
import errLogger from "./images/Error-logger.png";
import trendSearch from "./images/Trend-Search.png";
import petMatching from "./images/Pet-Matching.png";
import MotiveDiary from "./images/Motive-Diary.png";
import { SiGithub } from "react-icons/si";
import { BiLinkExternal } from "react-icons/bi";
import "./styles/Project.css";

const Project = () => {
  return (
    <div className="col-lg-8 col-md-12 project">
      <div className="project-wrapper">
        <div className="project-title fadein">
          <div className="title">
            <h2>my project</h2>
          </div>
        </div>
        <div className="project-content fadein">
          <div className="project-image">
            <div className="bgLR">
              <span className="mask">
                <img src={vanPark} alt="project-image1" className="leftSide"></img>
                <span className="cap">
                  <h5>Landing Page</h5>
                  <div className="project-links">
                    <a href="https://github.com/YuyaHirano1994/camp-website" target="_blank" rel="noreferrer">
                      <SiGithub />
                    </a>
                    <a href="https://vancouverpark.netlify.app/" target="_blank" rel="noreferrer">
                      <BiLinkExternal />
                    </a>
                  </div>
                </span>
              </span>
            </div>
            <p>Landing page</p>
          </div>
          <div className="project-image">
            <div className="bgLR">
              <span className="mask">
                <img src={errLogger} alt="project-image1" className="leftSide"></img>
                <span className="cap">
                  <h5>Error logger</h5>
                  <div className="project-links">
                    <a href="https://github.com/YuyaHirano1994/error-logger" target="_blank" rel="noreferrer">
                      <SiGithub />
                    </a>
                    <a href="https://error-logger-nine.vercel.app/" target="_blank" rel="noreferrer">
                      <BiLinkExternal />
                    </a>
                  </div>
                </span>
              </span>
            </div>
            <p>Redux CRUD</p>
          </div>
          <div className="project-image">
            <div className="bgLR">
              <span className="mask">
                <img src={trendSearch} alt="project-image1"></img>
                <span className="cap">
                  <h5>Twitter Trend Search</h5>
                  <div className="project-links">
                    <a href="https://github.com/YuyaHirano1994/Twitter-Trend-Search" target="_blank" rel="noreferrer">
                      <SiGithub />
                    </a>
                    <a href="https://twitter-trend-search.vercel.app/" target="_blank" rel="noreferrer">
                      <BiLinkExternal />
                    </a>
                  </div>
                </span>
              </span>
            </div>
            <p>React & AWS</p>
          </div>
          <div className="project-image">
            <div className="bgLR">
              <span className="mask">
                <img src={petMatching} alt="project-image1"></img>
                <span className="cap">
                  <h5>Pet Matching</h5>
                  <div className="project-links">
                    <a href="https://github.com/YuyaHirano1994/pet-matching-app" target="_blank" rel="noreferrer">
                      <SiGithub />
                    </a>
                    <a href="https://pet-matching-app.vercel.app/" target="_blank" rel="noreferrer">
                      <BiLinkExternal />
                    </a>
                  </div>
                </span>
              </span>
            </div>
            <p>React & API</p>
          </div>
          <div className="project-image">
            <div className="bgLR">
              <span className="mask">
                <img src={MotiveDiary} alt="project-image1"></img>
                <span className="cap">
                  <h5>Motive Diary</h5>
                  <div className="project-links">
                    <a href="https://github.com/YuyaHirano1994/MotiveDiary" target="_blank" rel="noreferrer">
                      <SiGithub />
                    </a>
                    <a href="https://motive-diary.vercel.app/" target="_blank" rel="noreferrer">
                      <BiLinkExternal />
                    </a>
                  </div>
                </span>
              </span>
            </div>
            <p>React & Supabase</p>
          </div>
          {/* <div className="project-image">
                  <img src="#" alt="project-image1"></img>
                </div> */}
        </div>
      </div>
    </div>
  );
};

export default Project;

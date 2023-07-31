import React from "react";
import vanPark from "./images/Vancouver-Park.png";
import trendSearch from "./images/Trend-Search.png";
import MotiveIcon from "./images/Problem solving-bro.png";
import Eventer from "./images/Eventer.png";
import "./styles/Project.css";
import MyProject from "./ProjectComponent";

const Project = () => {
  return (
    <div className="col-lg-8 col-md-12 project" id="project" name="project">
      <div className="project-wrapper">
        <div className="project-title fadein">
          <div className="title">
            <h2>my project</h2>
          </div>
        </div>
        <div className="fadein">
          <MyProject
            title="Vancouver Park(LP)"
            description="For Vancouver Park, an imaginary camping destination, I developed a responsive landing page showcasing the site's picturesque locations and amenities. "
            technologies={["HTML", "CSS"]}
            thumbnail={vanPark}
            github="https://github.com/YuyaHirano1994/camp-website"
            link="https://vancouverpark.netlify.app/"
          />
        </div>
        <div className="fadein">
          <MyProject
            title="Motive Diary"
            description="Motive Diary is a diary application designed to help users meet their challenges by setting goals and recording daily progress. Created as a solution to the difficulty of tracking personal growth on platforms like Twitter, this CRUD web application was built using React, Supabase, Material UI, and Recoil. The intuitive interface enables easy reviewing of individual records, fostering a supportive community where users can cheer each other on in their personal journeys."
            technologies={["React", "Supabase", "MUI", "Recoil"]}
            thumbnail={MotiveIcon}
            github="https://github.com/YuyaHirano1994/MotiveDiary"
            link="https://motive-diary.vercel.app/"
          />
        </div>
        <div className="fadein">
          <MyProject
            title="Twitter Trend"
            description="This unique application was built with React, TypeScript, tailwindCSS, AWS Lambda, and AWS Gateway, utilizing Twitter's API to allow users to visually check the latest information. By simply entering a keyword and pressing the search button, users can instantly access real-time insights. The combination of Twitter's API and AWS distinguishes this project, reflecting a pioneering approach to information retrieval."
            technologies={["React", "TypeScript", "AWS", "Twitter API"]}
            thumbnail={trendSearch}
            github="https://github.com/YuyaHirano1994/Twitter-Trend-Search"
            link="https://twitter-trend-search.vercel.app/"
          />
        </div>

        <div className="project-title fadein">
          <div className="title">
            <h2>my work</h2>
          </div>
        </div>
        <div className="fadein">
          <MyProject
            title="Eventer (Japanese)"
            description="I developed Eventer, a web application built with React and TypeScript, marking the beginning of my career as a Front-end Developer. This application serves as a platform for event searching, registration, participation, and ticket sales. My primary responsibilities included developing the event registration feature and adding form validation functionalities."
            technologies={["React", "TypeScript", "MUI", "AWS", "Recoil"]}
            thumbnail={Eventer}
            link="https://www.eventer.website/"
          />
        </div>
      </div>
    </div>
  );
};

export default Project;

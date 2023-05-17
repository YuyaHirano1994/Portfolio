import React from "react";
import { Chrono } from "react-chrono";
import { data } from "./CareerData";
import "./styles/Career.css";

const Career = () => {
  return (
    <div className="col-lg-8 col-md-12 career">
      <div className="career-wrapper">
        <div className="career-title fadein">
          <div className="title">
            <h2>my career</h2>
          </div>
        </div>
        <div className="career-content fadein">
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
  );
};

export default Career;

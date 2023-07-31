import React from "react";
import { SiGithub } from "react-icons/si";
import { BiLinkExternal } from "react-icons/bi";
import "./styles/Project.css";

const MyProject = ({ title, description, technologies, thumbnail, github, link }) => (
  <div className="project-container">
    <img src={thumbnail} alt={title} className="project-thumbnail" />
    <div className="project-details">
      <h2 className="project-title">{title}</h2>
      <p className="project-description">{description}</p>
      <div className="project-references">
        <div className="project-technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="project-technology">
              {tech}
            </span>
          ))}
        </div>
        <div className="project-links">
          {github && (
            <a href={github} target="_blank" rel="noreferrer">
              <SiGithub />
            </a>
          )}
          <a href={link} target="_blank" rel="noreferrer">
            <BiLinkExternal />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default MyProject;

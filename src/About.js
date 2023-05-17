import React, { useEffect } from "react";
import { FaCode, FaJava } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiSass,
  SiTailwindcss,
  SiOracle,
  SiSupabase,
  SiMysql,
  SiGraphql,
  SiAmazonaws,
  SiGithub,
} from "react-icons/si";
import about_img from "./images/image1.jpeg";
import "./styles/About.css";

const About = () => {
  const skills = [
    { icon: SiJavascript, name: "JavaScript" },
    { icon: SiTypescript, name: "TypeScript" },
    { icon: SiReact, name: "React" },
    { icon: SiNodedotjs, name: "Node.js" },
    { icon: FaJava, name: "Java" },
    { icon: SiHtml5, name: "HTML5" },
    { icon: SiCss3, name: "CSS3" },
    { icon: SiSass, name: "Sass" },
    { icon: SiTailwindcss, name: "Tailwind" },
    { icon: SiSupabase, name: "Supabase" },
    { icon: SiMysql, name: "MySQL" },
    { icon: SiOracle, name: "OracleDB" },
    { icon: SiGraphql, name: "GraphQL" },
    { icon: SiAmazonaws, name: "AWS" },
    { icon: SiGithub, name: "Git" },
    { icon: FaCode, name: "Other" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".fadein");

      elements.forEach((element) => {
        const elemPos = element.offsetTop;
        const scroll = window.pageYOffset;
        const windowHeight = window.innerHeight;

        if (scroll > elemPos - windowHeight + 200) {
          element.classList.add("scrollin");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="col-lg-8 col-md-12 about">
      <div className="about-wrapper">
        <div className="about-title fadein">
          <div className="title">
            <h2>about me</h2>
          </div>
        </div>
        <div className="about-content fadein">
          <div className="about-image">
            <img src={about_img} alt="image1"></img>
          </div>
          <div className="about-desc">
            <p>Hi, there! I'm, Yuya Hirano.</p>
            <p>
              A Full-Stack Web Developer passionate about creating interactive applications and experiences on the web.
            </p>
            <p>I have experience of web developer and system engineer!</p>
          </div>
        </div>
        <div className="skill-area fadein">
          <div className="skill-icons">
            {skills.map((skill, index) => (
              <div className="skill-icon" key={index}>
                <skill.icon />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

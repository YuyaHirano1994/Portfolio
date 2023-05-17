import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFileDownload } from "react-icons/fa";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="col-lg-8 col-md-12 contact" id="contact" name="contact">
      <div className="contact-wrapper">
        <div className="contact-title fadein">
          <div className="title">
            <h2>reach me</h2>
          </div>
        </div>
        <div className="contact-content fadein">
          <p className="text">
            Feel free to get in touch with me.
            <br />
            I'll be happy to hear from you!
          </p>
          <div className="email">
            <a href={`mailto:${"yuyahirano.dev@gmail.com"}`}>yuyahirano.dev@gmail.com</a>
          </div>
          <div className="phone">
            <h3>(236) 858-8632</h3>
          </div>
          <div className="hero-icons">
            <div className="icon">
              <a href="https://github.com/YuyaHirano1994" target="_blank" rel="noreferrer">
                <BsGithub />
              </a>
            </div>
            <div className="icon">
              <a href="https://www.linkedin.com/in/yuya-hirano/" target="_blank" rel="noreferrer">
                <BsLinkedin />
              </a>
            </div>
            <div className="icon">
              <a href="#">
                <FaFileDownload />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

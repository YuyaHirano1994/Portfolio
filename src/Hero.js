import React from "react";
import { useEffect } from "react";
import { BsGithub, BsLinkedin, BsArrowDown } from "react-icons/bs";
import { FaFileDownload } from "react-icons/fa";
import "./styles/Hero.css";

const Hero = () => {
  useEffect(() => {
    var unit = 100,
      canvasList,
      info = {},
      colorList;

    function init() {
      info.seconds = 0;
      info.t = 0;
      canvasList = [];
      colorList = [];
      canvasList.push(document.getElementById("waveCanvasThin"));
      colorList.push(["#0ff", "#ff0", "#f00", "#00f", "#f0f"]);

      for (var canvasIndex in canvasList) {
        var canvas = canvasList[canvasIndex];
        canvas.width = document.documentElement.clientWidth;
        canvas.height = 200;
        canvas.contextCache = canvas.getContext("2d");
      }
      update();
    }

    function update() {
      for (var canvasIndex in canvasList) {
        var canvas = canvasList[canvasIndex];
        draw(canvas, colorList[canvasIndex]);
      }
      info.seconds = info.seconds + 0.014;
      info.t = info.seconds * Math.PI;
      setTimeout(update, 35);
    }

    function draw(canvas, color) {
      var context = canvas.contextCache;
      context.clearRect(0, 0, canvas.width, canvas.height);

      drawWave(canvas, color[0], 0.8, 3, 0);
      drawWave(canvas, color[1], 0.5, 4, 0);
      drawWave(canvas, color[2], 0.3, 1.6, 0);
      drawWave(canvas, color[3], 0.2, 3, 100);
      drawWave(canvas, color[4], 0.5, 1.6, 250);
    }

    function drawWave(canvas, color, alpha, zoom, delay) {
      var context = canvas.contextCache;
      context.strokeStyle = color;
      context.lineWidth = 1;
      context.globalAlpha = alpha;
      context.beginPath();
      drawSine(canvas, info.t / 0.5, zoom, delay);
      context.stroke();
    }

    function drawSine(canvas, t, zoom, delay) {
      var xAxis = Math.floor(canvas.height / 2);
      var yAxis = 0;
      var context = canvas.contextCache;
      var x = t;
      var y = Math.sin(x) / zoom;
      context.moveTo(yAxis, unit * y + xAxis);

      for (let i = yAxis; i <= canvas.width + 10; i += 10) {
        x = t + (-yAxis + i) / unit / zoom;
        y = Math.sin(x - delay) / 3;
        context.lineTo(i, unit * y + xAxis);
      }
    }

    init();
  }, []);

  return (
    <>
      <canvas id="waveCanvasThin"></canvas>
      <div className="col-lg-8 col-md-12 hero">
        <div className="hero-wrapper">
          <div className="hero-content">
            <h1>Yuya Hirano</h1>
            <p>I am Web Developer from Japan</p>
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
              <a
                href="https://www.linkedin.com/in/yuya-hirano/overlay/1635526738190/single-media-viewer/?profileId=ACoAAD0iPRgBMCRVceSgyfkb4euO3KgLVqQbRO4"
                target="_blank"
                rel="noreferrer"
              >
                <FaFileDownload />
              </a>
            </div>
          </div>
          <div className="down-arrow">
            <BsArrowDown />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

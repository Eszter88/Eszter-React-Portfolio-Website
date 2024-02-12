import React from "react";
import "./Services.scss";
import { Link } from "react-router-dom";

function Services() {
  return (
    <>
      <div className="container services-page">
        <div className="project-lists">
          <div className="project" style={{ backgroundColor: "#ffd700" }}>
            <div className="project-info">
              <h2 className="project-name">Web Design Implementation</h2>
              <div className="project-divider"></div>
              <div className="project-description">
                <p>
                  Send over your Figma file, and I'll work diligently to turn
                  your design with HTML, CSS and JS into a functional website
                  with great performance. <br />
                  <br /> My focus is on building sites that are easy to scale,
                  maintain, and accessible. <br />
                  <br />
                  Every day I am learning new best practices and improving my
                  skills.
                  <br />
                  <br /> Let's collaborate!
                </p>
              </div>
            </div>
          </div>
          <div className="project" style={{ backgroundColor: "#00b1ff" }}>
            <div className="project-info">
              <h2 className="project-name"> Frontend Development with REACT</h2>
              <div className="project-divider"></div>
              <div className="project-description">
                <p>
                  As a junior developer, I'm eager to contribute my skills to
                  front-end development, particularly in React projects. <br />
                  <br />
                  While I'm in the early stages of my career, I've gained a
                  foundational understanding of essential tools like Git,
                  Command line, Linux, and Trello. <br />
                  <br />
                  Curious about my journey? Explore my portfolio to see the
                  projects I've tackled as I continue to grow in the world of
                  React development.
                </p>
              </div>
            </div>
          </div>
          <div className="project" style={{ backgroundColor: "#ffd700" }}>
            <div className="project-info">
              <h2 className="project-name">
                Maintenance, Updates & Project Management
              </h2>
              <div className="project-divider"></div>
              <div className="project-description">
                <p>
                  Update and Maintain a website is a constant task. <br />
                  <br />
                  Do you need a hand with it? I am fluent in English, Spanish,
                  Hungarian and intermediate in German. <br />
                  <br />I can offer support in client communication and website
                  maintenance equally. <br />
                  <br />
                  Let me assist you in ensuring smooth project operations.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="button-double">
          <Link to="/services" className="btn">
            SERVICES
          </Link>
          <Link to="/contact" className="btn">
            CONTACT ME
          </Link>
        </div>
      </div>
    </>
  );
}

export default Services;

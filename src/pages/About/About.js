import React from "react";
import { useState, useEffect } from "react";
import "./About.scss";
import AnimatedLetters from "../../components/AnimatedLetters/AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function About() {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t"]}
              idx={15}
            />
          </h1>
          <p>
            Originally from Budapest, Hungary, I've spent most of my adult life
            in Mallorca, Spain. Along the way, I've also had the pleasure of
            living in vibrant cities like London and Los Angeles. While I
            initially pursued a career in hotel management, I found myself drawn
            to tech projects alongside it. Eventually, I made a transformative
            choice to fully commit to this newfound passion and take all my
            customer service experience and achievements with me to this next
            chapter of my life.
          </p>
          <p>
            In 2022, I successfully completed an intensive six-month front-end
            developer course. While self-taught in HTML and CSS, this intensive
            program enhanced my skills in JavaScript and React. As I saw the
            demands of WordPress websites, I started my freelancing business by
            creating WordPress sites for my clients. While programming was
            placed a bit on the side, I continuously practice my programming
            skills on side projects. Regarding my journey in WordPress, I handle
            the projects from start to finish, including design, development,
            marketing strategy, basic SEO, and security. During these years, I
            used most of the page builders while updating different websites.
          </p>
          <p align="LEFT">
            I'm confidently unconfident, naturally curious, and perpetually
            working on improving my skills. Coming from a customer service
            career, soft skills come easy to me. I am easy to work with,
            flexible, and honest. In creating websites, my favorite part is web
            development; I truly enjoy getting amazing designs and develop them
            in the best way possible. So if you feel like we could make a great
            team, I would love to hear from you!
          </p>
          <div class="button-double">
            <Link to="/portfolio" className="btn">
              PORTFOLIO
            </Link>
            <Link to="/contact" className="btn">
              CONTACT ME
            </Link>{" "}
          </div>
        </div>
        <div className="stage-cube-cont">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD813" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faWordpress} color="#d54e21" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

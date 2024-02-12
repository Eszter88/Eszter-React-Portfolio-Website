import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import AnimatedLetters from "../../components/AnimatedLetters/AnimatedLetters.js";

function Home() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = [" ", "E", "s", "z", "t", "e", "r"];
  const jobArray = [
    "w",
    "e",
    "b",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    ".",
  ];

  useEffect(() => {
    console.log("Timer starts");

    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2000);

    return () => {
      console.log("Cleanup - clearTimeout");
      clearTimeout(timer);
    };
  }, []);

  console.log("Home Renders");

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <br />
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>

          <h2>Frontend & Wordpress Developer </h2>
          <p>
            Are tight deadlines and project overflow keeping you up at night? As
            a freelance front-end and WordPress developer, I'm here to be your
            reliable solution.
          </p>
          <div class="button-double">
            <Link to="/about" className="btn">
              ABOUT ME
            </Link>
            <Link to="/contact" className="btn">
              CONTACT ME
            </Link>{" "}
          </div>
        </div>
        <div className="image-zone">
          <img
            className="profile-img"
            src={require("../../assets/images/Profile.jpg")}
            alt="Eszter profile"
          />
        </div>
      </div>
    </>
  );
}

export default Home;

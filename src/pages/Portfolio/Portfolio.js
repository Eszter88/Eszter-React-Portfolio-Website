import React from "react";
import "./Portfolio.scss";

import { useState, useEffect } from "react";
import AnimatedLetters from "../../components/AnimatedLetters/AnimatedLetters";
import { Link } from "react-router-dom";

function Portfolio() {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <>
      <div className="container portfolio-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={["P", "o", "r", "t", "f", "o", "l", "i", "o"]}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p>
            Up to this point I’ve had the privilege of working across diverse
            clientale. For individual clients, freelancers and businesses from
            different countries in Europe. I redesigned, extended or created
            their WordPress websites. Additionally, I’ve collaborated with
            business associates to develop wordpress custom themes for
            designers.
          </p>
          <p>
            This portfolio website I created to showcase my front end REACT
            projects. Here you can click through some of them. Ricky & Morty
            using an API call to display characters. The To-do list stores data
            in local storage. The calendar was made with the date-fns library.
            And this website was built with REACT. Feel free to click through
            them.
          </p>
          <p>
            Last but not least you can check out my wordpress business website
            as well. I feel that I am constantly envolving and scaling up my
            knowledge. One thing for sure, the next project will be always
            better then the one before.
          </p>
          <div class="button-double">
            <Link to="/services" className="btn">
              SERVICES
            </Link>
            <Link to="/contact" className="btn">
              CONTACT ME
            </Link>
          </div>
        </div>
        <div className="project-list">
          <Link to="ricky-morty">
            <button>Ricky Morty Characters</button>
          </Link>
          <Link to="todo-app">
            <button>Todo App</button>
          </Link>
          <Link to="calendar">
            <button>Calendar</button>
          </Link>
          <button
            onClick={() => {
              window.open("https://www.webesti.com", "_blank");
            }}
          >
            My Business Website
          </button>
        </div>
      </div>
    </>
  );
}

export default Portfolio;

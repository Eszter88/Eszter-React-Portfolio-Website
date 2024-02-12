import "./Navbar.scss";
import { Link, NavLink } from "react-router-dom";
import LogoE from "../../assets/images/WEBESTI_favicon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faEnvelope,
  faBriefcase,
  faLightbulb,
  faCircleHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { useThemeUpdate } from "../ThemeContext";

const Navbar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  const toggleTheme = useThemeUpdate();

  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoE} alt="logo" />
      </Link>
      <nav className={hamburgerOpen ? "show" : "hide"}>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink className="portfolio-link" to="/portfolio" end>
          <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
        </NavLink>
        <NavLink className="services-link" to="/services">
          <FontAwesomeIcon icon={faLightbulb} color="#4d4d4e" />
        </NavLink>
        <NavLink className="contact-link" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/eszter-kiss-webesti"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Eszter88"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faCircleHalfStroke}
            className="dark-toggle"
            color="#ffd700"
            onClick={toggleTheme}
          >
            Toggle
          </FontAwesomeIcon>
        </li>
      </ul>

      <div className="hamburger" onClick={toggleHamburger}>
        <div className="bar burger1" />
        <div className="bar burger1" />
        <div className="bar burger1" />
      </div>
    </div>
  );
};

export default Navbar;

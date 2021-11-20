import React from "react";
import { Link } from "react-router-dom";
import "../Assets/Styles/CSS/Menu.css";
import crossHorizontal from "../Assets/Icons/crossHorizontal.svg";
import crossVertical from "../Assets/Icons/crossVertical.svg";
import { motion } from "framer-motion";
import PortfolioContext from "../Context/PortfolioContext";
import { useContext } from "react";

function Menu(): JSX.Element {
  const context = useContext(PortfolioContext);

  //Code to handle the transition of the Menu
  const menuTransition = () => {
    context.setDisplay("transitionMenu");
    setTimeout(() => context.setDisplay("hideMenu"), 130);
  };

  const handleClick = () => {
    context.handleRotation();
    context.display === "showMenu" ? menuTransition() : context.setDisplay("showMenu");
  };

  return (
    <div className="container">
      <div className="topContainer">
        <Link to="/">
          <h1>SANTIAGO RUIZ</h1>
        </Link>
        <div className="menuLogoContainer">
          <img src={crossHorizontal} alt="menu" />
          <motion.img
            src={crossVertical}
            alt="menu"
            animate={{ rotate: context.rotation }}
            transition={{ type: "tween" }}
            onClick={handleClick}
          />
        </div>
      </div>
      <div className={context.display}>
        <div className="dropdownMenu">
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/industrial-design">Industrial Design</Link>
            </li>
            <li>
              <Link to="/CGI">CGI</Link>
            </li>
            <li>
              <Link to="/graphics">Graphics</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="contact">Contact</Link>
            </li>
            <li>
              <a href="https://www.instagram.com/ruizsantiago/" rel="noreferrer noopener" target="_blank" className="instagram">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Menu;

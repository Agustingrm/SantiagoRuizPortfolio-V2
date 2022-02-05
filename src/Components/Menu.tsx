import React, { useEffect } from "react";
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
    setTimeout(() => context.setDisplay("hideMenu"), 150);
  };

  const handleClick = () => {
    context.handleRotation();
    context.display === "showMenu" ? menuTransition() : context.setDisplay("showMenu");
  };

  const handleClickLink = (category: string) => {
    context.setCategory(category);
    if (context.display === "showMenu") {
      context.handleRotation();
      menuTransition();
    }
  };

  //Handles visibility of menu according to width of screen
  useEffect(() => {
    if (window.innerWidth < 960) {
      context.setDisplay("hideMenu");
    }
  }, []);

  return (
    <div className="container">
      <div className="topContainer">
        <Link to="/" onClick={() => handleClickLink("default")}>
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
              <Link to="/about" onClick={() => handleClickLink("about")}>
                {/* Renders a diferent <p> according to the category that that the user is navigating */}
                {context.category === "about" && <p className="linkSelected">About</p>}
                {context.category === "default" && <p>About</p>}
                {context.category !== "about" && context.category !== "default" && (
                  <p className="unpressedLink">About</p>
                )}
              </Link>
            </li>
            <li>
              <Link to="/industrialDesign" onClick={() => handleClickLink("industrialDesign")}>
                {context.category === "industrialDesign" && <p className="linkSelected">Industrial Design</p>}
                {context.category === "default" && <p>Industrial Design</p>}
                {context.category !== "industrialDesign" && context.category !== "default" && (
                  <p className="unpressedLink">Industrial Design</p>
                )}
              </Link>
            </li>
            <li>
              <Link to="/CGI" onClick={() => handleClickLink("CGI")}>
                {context.category === "CGI" && <p className="linkSelected">CGI</p>}
                {context.category === "default" && <p>CGI</p>}
                {context.category !== "CGI" && context.category !== "default" && (
                  <p className="unpressedLink">CGI</p>
                )}
              </Link>
            </li>
            <li>
              <Link to="/graphics" onClick={() => handleClickLink("graphics")}>
                {context.category === "graphics" && <p className="linkSelected">Graphics</p>}
                {context.category === "default" && <p>Graphics</p>}
                {context.category !== "graphics" && context.category !== "default" && (
                  <p className="unpressedLink">Graphics</p>
                )}
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="contact" onClick={() => handleClickLink("contact")}>
                {context.category === "contact" && <p className="linkSelected">Contact</p>}
                {context.category === "default" && <p>Contact</p>}
                {context.category !== "contact" && context.category !== "default" && (
                  <p className="unpressedLink">Contact</p>
                )}
              </Link>
            </li>
            <li>
              <a
                href="https://www.instagram.com/ruizsantiago/"
                rel="noreferrer noopener"
                target="_blank"
                className={"instagram " + (context.category !== "default" && "unpressedLink")}
              >
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

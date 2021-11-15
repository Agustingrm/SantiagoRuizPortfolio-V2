import React from "react";
import { Link } from "react-router-dom";
import "../Assets/Styles/CSS/Menu.css";

function Menu(): JSX.Element {
  return (
    <div className="container">
      <h1>Santiago Ruiz</h1>
      <div>
        <Link to="/about">About</Link>
        <Link to="/industrial-design">Industrial Design</Link>
        <Link to="/CGI">CGI</Link>
        <Link to="/graphics">Graphics</Link>
      </div>
      <div>
        <Link to="contact"></Link>
        <a href="https://www.instagram.com/ruizsantiago/" rel="noreferrer noopener" target="_blank" id="instagram">
          Instagram
        </a>
      </div>
    </div>
  );
}

export default Menu;

import React from "react";
import { Link } from "react-router-dom";
import "../Assets/Styles/CSS/Menu.css";

function Menu(): JSX.Element {
  return (
    <div className="container">
      <Link to="/">
        <h1>SANTIAGO RUIZ</h1>
      </Link>
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
  );
}

export default Menu;

import React from "react";
import Toggle from "../Toggle/Toggle";
import "./navbar.css";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <>
      <div className="nav_container" id="Navbar">
        <div className="nav_left">
          <div className="nav_name">Aj</div>
          <Toggle />
        </div>
        <div className="nav_right">
          <div className="nav_list">
            <ul style={{ listStyle: "none" }}>
              <li>
                <Link to="Navbar" spy={true} smooth={true}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="Services" spy={true} smooth={true}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="Skills" spy={true} smooth={true}>
                  Skills
                </Link>
              </li>
              <li>
                <Link to="Project" spy={true} smooth={true}>
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          <Link to="Contact" spy={true} smooth={true}>
            <button className="button nav_button">Contact</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;

import React from "react";
import { NavBarElements } from "../../Utilities/utility";
import { Link } from "react-router-dom";
import "../NavBar/NavBar.css";

export const NavBar = () => {
  return (
    <div className="navbar_container">
      {NavBarElements.map((item, index) => {
        return (
          <nav key={index}>
            <ul>
              <li>
                <Link to={""}>{item.link}</Link>
              </li>
            </ul>
          </nav>
        );
      })}
    </div>
  );
};

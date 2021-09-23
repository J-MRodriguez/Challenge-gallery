/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Menu.css";

const Menu = () => {
  return (
    <nav className="ui fixed menu pro">
      <ul className="menu cf">
        <li>
          <a href="">Viral</a>
        </li>
        <li>
          <a href="">Section</a>
          <ul className="submenu">
            <li>
              <a href="">Hot</a>
            </li>
            <li>
              <a href="">Top</a>
            </li>
            <li>
              <a href="">User</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="">Sort</a>
          <ul className="submenu">
            <li>
              <a href="">Viral</a>
            </li>
            <li>
              <a href="">Top</a>
            </li>
            <li>
              <a href="">Time</a>
            </li>
            <li>
              <a href="">Rising</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="">Window</a>
          <ul className="submenu">
            <li>
              <a href="">Day</a>
            </li>
            <li>
              <a href="">Week</a>
            </li>
            <li>
              <a href="">Month</a>
            </li>
            <li>
              <a href="">Year</a>
            </li>
            <li>
              <a href="">All</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;

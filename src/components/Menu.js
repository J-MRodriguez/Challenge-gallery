/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  changeSection,
  changeSort,
  changeWindow,
} from "../redux/actions/productsActions";
import "./Menu.css";

const Menu = () => {
  return (
    <nav className="ui fixed menu pro">
      <ul className="menu cf">
        <li>
          <a>Viral</a>
        </li>
        <li>
          <a>Section</a>
          <ul className="submenu">
            <li>
              <a
                onClick={() => {
                  changeSection("hot");
                }}
              >
                Hot
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  changeSection("top");
                }}
              >
                Top
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  changeSection("user");
                }}
              >
                User
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a>Sort</a>
          <ul className="submenu">
            <li>
              <a
                onClick={() => {
                  changeSort("hot");
                }}
              >
                Viral
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  changeSort("top");
                }}
              >
                Top
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  changeSort("time");
                }}
              >
                Time
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a>Window</a>
          <ul className="submenu">
            <li>
              <a
                onClick={() => {
                  changeWindow("day");
                }}
              >
                Day
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  changeWindow("week");
                }}
              >
                Week
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  changeWindow("month");
                }}
              >
                Month
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  changeWindow("year");
                }}
              >
                Year
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  changeWindow("all");
                }}
              >
                All
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;

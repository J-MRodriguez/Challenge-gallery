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
            <li
              onClick={() => {
                changeSection("hot");
              }}
            >
              <a>Hot</a>
            </li>
            <li
              onClick={() => {
                changeSection("top");
              }}
            >
              <a>Top</a>
            </li>
            <li
              onClick={() => {
                changeSection("user");
              }}
            >
              <a>User</a>
            </li>
          </ul>
        </li>
        <li>
          <a>Sort</a>
          <ul className="submenu">
            <li
              onClick={() => {
                changeSort("hot");
              }}
            >
              <a>Viral</a>
            </li>
            <li
              onClick={() => {
                changeSort("top");
              }}
            >
              <a>Top</a>
            </li>
            <li
              onClick={() => {
                changeSort("time");
              }}
            >
              <a>Time</a>
            </li>
          </ul>
        </li>
        <li>
          <a>Window</a>
          <ul className="submenu">
            <li
              onClick={() => {
                changeWindow("day");
              }}
            >
              <a>Day</a>
            </li>
            <li
              onClick={() => {
                changeWindow("week");
              }}
            >
              <a>Week</a>
            </li>
            <li
              onClick={() => {
                changeWindow("month");
              }}
            >
              <a>Month</a>
            </li>
            <li
              onClick={() => {
                changeWindow("year");
              }}
            >
              <a>Year</a>
            </li>
            <li
              onClick={() => {
                changeWindow("all");
              }}
            >
              <a>All</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;

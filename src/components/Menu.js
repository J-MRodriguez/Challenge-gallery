/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useDispatch } from "react-redux";
import {
  changeSection,
  changeSort,
  changeViral,
  changeWindow,
} from "../redux/actions/productsActions";
import "./Menu.css";

const Menu = () => {
  const dispatch = useDispatch();
  return (
    <nav className="ui fixed menu pro">
      <ul className="menu cf">
        <li>
          <a>Viral</a>
          <ul className="submenu">
            <li
              onClick={() => {
                dispatch(changeViral("on"));
              }}
            >
              <a>ON</a>
            </li>
            <li
              onClick={() => {
                dispatch(changeViral("off"));
              }}
            >
              <a>OFF</a>
            </li>
          </ul>
        </li>
        <li>
          <a>Section</a>
          <ul className="submenu">
            <li
              onClick={() => {
                dispatch(changeSection("hot"));
              }}
            >
              <a>Hot</a>
            </li>
            <li
              onClick={() => {
                dispatch(changeSection("top"));
              }}
            >
              <a>Top</a>
            </li>
            <li
              onClick={() => {
                dispatch(changeSection("user"));
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
                dispatch(changeSort("viral"));
              }}
            >
              <a>Viral</a>
            </li>
            <li
              onClick={() => {
                dispatch(changeSort("top"));
              }}
            >
              <a>Top</a>
            </li>
            <li
              onClick={() => {
                dispatch(changeSort("time"));
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
                dispatch(changeWindow("day"));
              }}
            >
              <a>Day</a>
            </li>
            <li
              onClick={() => {
                dispatch(changeWindow("week"));
              }}
            >
              <a>Week</a>
            </li>
            <li
              onClick={() => {
                dispatch(changeWindow("month"));
              }}
            >
              <a>Month</a>
            </li>
            <li
              onClick={() => {
                dispatch(changeWindow("year"));
              }}
            >
              <a>Year</a>
            </li>
            <li
              onClick={() => {
                dispatch(changeWindow("all"));
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

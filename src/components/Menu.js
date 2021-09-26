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
          <p>Viral</p>
          <ul className="submenu">
            <li
              onClick={() => {
                dispatch(changeViral(true));
              }}
            >
              <p>ON</p>
            </li>
            <li
              onClick={() => {
                dispatch(changeViral(false));
              }}
            >
              <p>OFF</p>
            </li>
          </ul>
        </li>
        <li>
          <p>Section</p>
          <ul className="submenu">
            <li
              onClick={() => {
                dispatch(changeSection("hot"));
              }}
            >
              <p>Hot</p>
            </li>
            <li
              onClick={() => {
                dispatch(changeSection("top"));
              }}
            >
              <p>Top</p>
            </li>
            <li
              onClick={() => {
                dispatch(changeSection("user"));
              }}
            >
              <p>User</p>
            </li>
          </ul>
        </li>
        <li>
          <p>Sort</p>
          <ul className="submenu">
            <li
              onClick={() => {
                dispatch(changeSort("viral"));
              }}
            >
              <p>Viral</p>
            </li>
            <li
              onClick={() => {
                dispatch(changeSort("top"));
              }}
            >
              <p>Top</p>
            </li>
            <li
              onClick={() => {
                dispatch(changeSort("time"));
              }}
            >
              <p>Time</p>
            </li>
          </ul>
        </li>
        <li>
          <p>Window</p>
          <ul className="submenu">
            <li
              onClick={() => {
                dispatch(changeWindow("day"));
              }}
            >
              <p>Day</p>
            </li>
            <li
              onClick={() => {
                dispatch(changeWindow("week"));
              }}
            >
              <p>Week</p>
            </li>
            <li
              onClick={() => {
                dispatch(changeWindow("month"));
              }}
            >
              <p>Month</p>
            </li>
            <li
              onClick={() => {
                dispatch(changeWindow("year"));
              }}
            >
              <p>Year</p>
            </li>
            <li
              onClick={() => {
                dispatch(changeWindow("all"));
              }}
            >
              <p>All</p>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;

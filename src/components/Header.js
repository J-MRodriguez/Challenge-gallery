import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

const Header = () => {
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <Link to="/">
          <h2 style={{ cursor: "pointer", color: "black" }}>
            <IoMdArrowBack />
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Header;

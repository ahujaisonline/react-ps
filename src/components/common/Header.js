import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const orangeColor = {
    color: "orange"
  };
  return (
    <>
      <NavLink exact activeStyle={orangeColor} to="/">
        {" "}
        Home{" "}
      </NavLink>{" "}
      |{" "}
      <NavLink activeStyle={orangeColor} to="/about">
        {" "}
        About{" "}
      </NavLink>{" "}
      |{" "}
      <NavLink activeStyle={orangeColor} to="/courses">
        Courses
      </NavLink>
    </>
  );
}

export default Header;

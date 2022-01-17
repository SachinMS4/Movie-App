import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
      <h1 className="header">Movie App</h1>
    </Link>
  );
}

export default Header;

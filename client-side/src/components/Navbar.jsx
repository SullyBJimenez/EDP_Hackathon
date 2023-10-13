import React from "react";
import { Link } from "react-router-dom";
import { LogOut } from "./LogOut";
import styled from "styled-components";

const NavUnlisted = styled.ul`
  text-decoration: none;
`;

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "white",
};

export const Navbar = () => {
  return (
    <div>
      <div className="navbarDiv">Product created by 404 Team Not Found</div>
      <NavUnlisted>
        <Link style={linkStyle} to="/currentuser">
          My Profile
        </Link>

        <Link style={linkStyle} to="/search">
          Search
        </Link>

        <Link style={linkStyle} to="/model">
          Model
        </Link>

        <LogOut />
      </NavUnlisted>
    </div>
  );
};

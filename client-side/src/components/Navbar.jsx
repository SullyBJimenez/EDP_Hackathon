import React from 'react';
import {  Link } from "react-router-dom";
import { LogOut } from './LogOut';

export const Navbar= () =>{
  return (
  <div>
    <li>
      <Link to="/currentuser">My Profile</Link>
    </li>
    <li>
      <Link to="/search">Search</Link>
    </li>
    <li>
      <Link to="/model">Model</Link>
    </li>
    <LogOut/>
    
  </div>
  );
}

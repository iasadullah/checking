import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
//pages

import { Button } from "react-bootstrap";
interface NavBar {}
const NavBar = () => {
  return (
    <>
      <nav className="mainNav">
        <div className="logoContainer">
          <h2>Jazz Discount Bazar</h2>
        </div>
        <div className="navList">
          <ul>
            <li>
              <Link to="/">HomeScreen</Link>
            </li>
            <li>
              <Link to={"/Food"}>Food</Link>
            </li>
            <li>
              <Link to={"/OnlineStore"}>Online Store</Link>
            </li>
            <li>
              <Link to={"/LifeStyle"}>LifeStyle</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

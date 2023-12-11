import React, { useState } from "react";
import "./Navbar.css";

// Imported Icons
import { BiLogoMediumOld } from "react-icons/bi";
// import { AiFillCloseCircle } from "react-icons/ai";
import { IoIosCloseCircle } from "react-icons/io";
import { PiDotsNineBold } from "react-icons/pi";

const Navbar = () => {
  // State to track and update navbar
  const [navBar, setNavBar] = useState("menu");
  // function to show navbar
  const showNavBar = () => {
    setNavBar("menu showNavBar");
  };
  // function to remove navbar
  const removeNavBar = () => {
    setNavBar("menu");
  };

  return (
    <div className="navBar">
      <div className="logoDiv">
        <BiLogoMediumOld className="icon" />
        <span>OU-Trips</span>
      </div>
      {/* Links for Large Screens */}
      <ul className="links">
        <li className="navList">Destinations</li>
        <li className="navList">About Us</li>
        <li className="navList">Testimonial</li>
        <li className="navList">Gallery</li>
      </ul>
      {/* Menu for Small Screens */}
      <div className={navBar}>
        <ul>
          <li className="navList">Destinations</li>
          <li className="navList">About Us</li>
          <li className="navList">Testimonial</li>
          <li className="navList">Gallery</li>
        </ul>

        {/* icon to remove navbar */}
        <IoIosCloseCircle className="icon closeIcon" onClick={removeNavBar} />
      </div>
      <button className="SignUpBtn btn">Sign Up</button>
      {/* icon to toggle Navbar */}
      <PiDotsNineBold className="icon menuIcon" onClick={showNavBar} />
    </div>
  );
};

export default Navbar;

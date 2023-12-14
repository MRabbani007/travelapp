import React, { useEffect } from "react";
import "./Footer.css";
// Import Aos
import Aos from "aos";
import "aos/dist/aos.css";

// Imported Icons
import { BiLogoMediumOld } from "react-icons/bi";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="footer">
      <div className="secContainer">
        <div className="logoDiv">
          <div className="footerLogo" data-aos="fade-up">
            <BiLogoMediumOld className="icon" />
            <span>OU - Trips</span>
          </div>
        </div>
        <div className="socials flex" data-aos="fade-up">
          <ImFacebook className="icon" />
          <BsTwitter className="icon" />
          <AiFillInstagram className="icon" />
        </div>
      </div>
      <div className="secContainer flex" data-aos="fade-up">
        <div className="footerLinks">
          <span className="linkTitle">Information</span>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Explore</a>
            </li>
            <li>
              <a href="#">Travel</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        <div className="footerLinks">
          <span className="linkTitle">Helpfull Links</span>
          <ul>
            <li>
              <a href="#">Destination</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Travel & Condition</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          </ul>
        </div>
        <div className="footerLinks">
          <span className="linkTitle">Contact Details</span>
          <p className="phone">+7 123 456 78 90</p>
          <p className="email">helpdesk@moutrips.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

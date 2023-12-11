import React, { useEffect } from "react";
import "./Portfolio.css";

// imported assets
import Safety from "../../assets/safety-support.png";
import DestImage from "../../assets/destination.png";
import Chat from "../../assets/chat.png";
import gridImage from "../../assets/gridImage.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="portfolio section">
      <div className="secContainer">
        <div className="secHeading">
          <h3 data-aos="fade-up">Why Should You Choose Us?</h3>
          <p data-aos="fade-up">
            We have extensive knowledge and experience in the travel industry
          </p>
        </div>
      </div>
      <div className="secContainer flex">
        <div className="leftContainer">
          <div className="grid">
            <div className="singlePortfolio flex-left">
              <div className="iconDiv">
                <img
                  src={Safety}
                  alt="Safety & Support"
                  className="icon image"
                  data-aos="fade-up"
                />
              </div>
              <div className="infor">
                <h4 data-aos="fade-up">Safety & Support</h4>
                <p data-aos="fade-up">
                  Our top priority is the safety and wellbeing of our clients.
                  We maintain high safety standards and have emergency support
                  available during the trip.
                </p>
              </div>
            </div>
            <div className="singlePortfolio  flex-left">
              <div className="iconDiv">
                <img
                  src={DestImage}
                  alt="Destinations"
                  className="icon image"
                  data-aos="fade-up"
                />
              </div>
              <div className="infor">
                <h4 data-aos="fade-up">Diverse Range of Destinations</h4>
                <p data-aos="fade-up">
                  Whether it's a domestic tour or an international adventure, we
                  cover a wide range of destinations to cater to different
                  interests and preferences.
                </p>
              </div>
            </div>
            <div className="singlePortfolio  flex-left">
              <div className="iconDiv">
                <img src={Chat} alt="Customer Support" data-aos="fade-up" />
              </div>
              <div className="infor">
                <h4 data-aos="fade-up">24/7 Customer Support</h4>
                <p data-aos="fade-up">
                  Our dedicated customer support team is available round the
                  clock to address any querries or concerns before, during and
                  after the trip.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rightContainer flex">
          <img src={gridImage} alt="Image" className="" data-aos="fade-up" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

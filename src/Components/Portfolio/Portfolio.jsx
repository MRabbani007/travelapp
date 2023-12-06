import React from "react";
import "./Portfolio.css";

// imported assets
import Safety from "../../assets/safety-support.png";
import DestImage from "../../assets/destination.png";
import Chat from "../../assets/chat.png";
import gridImage from "../../assets/gridImage.jpg";

const Portfolio = () => {
  return (
    <div className="portfolio section">
      <div className="secContainer">
        <div className="secHeading">
          <h3>Why Should You Choose Us?</h3>
          <p>
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
                />
              </div>
              <div className="infor">
                <h4>Safety & Support</h4>
                <p>
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
                />
              </div>
              <div className="infor">
                <h4>Diverse Range of Destinations</h4>
                <p>
                  Whether it's a domestic tour or an international adventure, we
                  cover a wide range of destinations to cater to different
                  interests and preferences.
                </p>
              </div>
            </div>
            <div className="singlePortfolio  flex-left">
              <div className="iconDiv">
                <img src={Chat} alt="Customer Support" />
              </div>
              <div className="infor">
                <h4>24/7 Customer Support</h4>
                <p>
                  Our dedicated customer support team is available round the
                  clock to address any querries or concerns before, during and
                  after the trip.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rightContainer flex">
          <img src={gridImage} alt="Image" className="" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

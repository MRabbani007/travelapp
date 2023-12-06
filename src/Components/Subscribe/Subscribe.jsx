import React from "react";
import "./Subscribe.css";

// imported images
import subscribeImage from "../../assets/subscribe-image.png";

const Subscribe = () => {
  return (
    <div className="subscribe section">
      <div className="container secContainer grid">
        <img src={subscribeImage} alt="" />
        <div className="textDiv">
          <h3>Best Way To Start Your Journey!</h3>
          <p>
            We offer personalized itinaries tailored to individual preferences
            and interests.
          </p>
          <button className="btn">Start Here</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

import React from "react";
import "./Subscribe.css";

// imported images
import subscribeImage from "../../assets/subscribe-image.png";

const Subscribe = () => {
  return (
    <div className="subscribe section">
      <div className="secContainer flex">
        <img src={subscribeImage} alt="" data-aos="fade-open" />
        <div className="textDiv">
          <h3 data-aos="fade-up">Best Way To Start Your Journey!</h3>
          <p data-aos="fade-up">
            We offer personalized itinaries tailored to individual preferences
            and interests.
          </p>
          <button className="btn" data-aos="fade-up">
            Start Here
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

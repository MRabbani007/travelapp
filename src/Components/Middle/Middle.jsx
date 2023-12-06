import React from "react";
import "./Middle.css";

const Middle = () => {
  return (
    <div className="middle section flex justify-center">
      <div className="secContainer">
        <div className="flex middleCont">
          <span className="flex">
            <h1>10</h1>
            <p>World of experiences</p>
          </span>
          <span className="flex">
            <h1>2K+</h1>
            <p>Fine Destinations</p>
          </span>
          <span className="flex">
            <h1>10K+</h1>
            <p>Customer Reviews</p>
          </span>
          <span className="flex">
            <h1>4.8</h1>
            <p>Overall Rating</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Middle;

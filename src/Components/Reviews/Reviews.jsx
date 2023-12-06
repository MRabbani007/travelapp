import React from "react";
import "./Reviews.css";
import clientImage from "../../assets/client-image.png";
import divImage from "../../assets/imgDiv.jpg";
import { AiFillStar } from "react-icons/ai";

const Reviews = () => {
  return (
    <div className="review section flex">
      <div className="secContainer container grid">
        <div className="textDiv">
          <span className="redText">FROM OUR CLIENTS</span>
          <h3>Real Travel History From Our Beloved Clients</h3>
          <p>
            By choosing us as their travel agent, customers can expect an
            enriching and enjoyable travel experience, filled with unforgettable
            memories that will last a lifetime.
          </p>
          <span className="stars flex">
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
          </span>
          <div className="clientsImages flex">
            <img src={clientImage} alt="Client Image" />
            <img src={clientImage} alt="Client Image" />
            <img src={clientImage} alt="Client Image" />
            <img src={clientImage} alt="Client Image" />
          </div>
        </div>
        <div className="imgDiv">
          <img src={divImage} alt="Div Image" />
        </div>
      </div>
    </div>
  );
};

export default Reviews;

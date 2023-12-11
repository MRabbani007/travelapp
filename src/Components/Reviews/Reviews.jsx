import React, { useEffect } from "react";
import "./Reviews.css";
import clientImage from "../../assets/client-image.png";
import divImage from "../../assets/imgDiv.jpg";
import { AiFillStar } from "react-icons/ai";

import Aos from "aos";
import "aos/dist/aos.css";

const Reviews = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="review section flex">
      <div className="secContainer container grid">
        <div className="textDiv">
          <span className="redText" data-aos="fade-up">
            FROM OUR CLIENTS
          </span>
          <h3 data-aos="fade-up">
            Real Travel History From Our Beloved Clients
          </h3>
          <p data-aos="fade-up">
            By choosing us as their travel agent, customers can expect an
            enriching and enjoyable travel experience, filled with unforgettable
            memories that will last a lifetime.
          </p>
          <span className="stars flex" data-aos="fade-up">
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
            <AiFillStar className="icon" />
          </span>
          <div className="clientsImages flex" data-aos="fade-up">
            <img src={clientImage} alt="Client Image" />
            <img src={clientImage} alt="Client Image" />
            <img src={clientImage} alt="Client Image" />
            <img src={clientImage} alt="Client Image" />
          </div>
        </div>
        <div className="imgDiv">
          <img src={divImage} alt="Div Image" data-aos="fade-open" />
        </div>
      </div>
    </div>
  );
};

export default Reviews;

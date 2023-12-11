import React, { useEffect } from "react";
import "./Destinations.css";

// imported images
import Image1 from "../../assets/image1.jpg";
import Image2 from "../../assets/image2.jpg";
import Image3 from "../../assets/image3.jpg";
import Image4 from "../../assets/image4.jpg";
import Image5 from "../../assets/image5.jpg";
import Image6 from "../../assets/image6.jpg";
import Image7 from "../../assets/image7.jpg";
import Image8 from "../../assets/image8.jpg";

// imported icons
import { MdLocationPin } from "react-icons/md";
import { BsFillCreditCardFill } from "react-icons/bs";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { TiLocation } from "react-icons/ti";

import Aos from "aos";
import "aos/dist/aos.css";

// Array to hold Destinations
const destinations = [
  {
    id: 1,
    img: Image1,
    name: "Seyhelles Island",
    location: "Indian Ocean",
    rating: 4.7,
  },
  {
    id: 2,
    img: Image2,
    name: "Bora Bora Island",
    location: "Polynesia",
    rating: 4.5,
  },
  {
    id: 3,
    img: Image3,
    name: "Maldives Island",
    location: "Indian Ocean",
    rating: 4.9,
  },
  {
    id: 4,
    img: Image4,
    name: "Santorini Island",
    location: "Greece",
    rating: 4.5,
  },
  {
    id: 5,
    img: Image5,
    name: "Mali Island",
    location: "Indonesia",
    rating: 4.9,
  },
  {
    id: 6,
    img: Image6,
    name: "Maui Island",
    location: "Hawaii, USA",
    rating: 4.9,
  },
  {
    id: 7,
    img: Image7,
    name: "Capri Island",
    location: "Italy",
    rating: 4.7,
  },
  {
    id: 8,
    img: Image8,
    name: "Fiji Island",
    location: "South Pacific",
    rating: 4.4,
  },
];

const Destinations = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="destination section flex">
      <div className="secContainer container">
        <div className="secTitle">
          <span className="redText" data-aos="fade-up">
            EXPLORE NOW
          </span>
          <h3 data-aos="fade-up">Find Your Dream Destination</h3>
          <p data-aos="fade-up">
            Fill in the fields below to find the best spot for your next tour.
          </p>
        </div>
        <div className="searchField flex">
          <div className="inputField flex" data-aos="fade-up">
            <MdLocationPin className="icon" />
            <input type="text" placeholder="Location" />
          </div>
          <div className="inputField flex" data-aos="fade-up">
            <BsFillCreditCardFill className="icon" />
            <input type="text" placeholder="Budget" />
          </div>
          <div className="inputField flex" data-aos="fade-up">
            <BsFillCalendarDateFill className="icon" />
            <input type="text" placeholder="Date" />
          </div>
          <button className="btn flex" data-aos="fade-up">
            <BiSearchAlt className="icon" />
            Search
          </button>
        </div>
        {/* TODO: fix menu */}
        <div className="secMenu" data-aos="fade-up">
          <ul className="flex">
            <li className="active">All</li>
            <li>Recommended</li>
            <li>Beach</li>
            <li>Park</li>
            <li>Nature</li>
            <li>Mountain</li>
          </ul>
        </div>

        <div className="destinationContainer flex">
          {destinations.map((destination) => {
            return (
              <div
                className="singleDestination"
                key={destination.id}
                data-aos="fade-up"
              >
                <div className="imgDiv" data-aos="fade-up">
                  <img src={destination.img} alt={destination.name} />
                  <div className="descInfo flex">
                    <div className="text">
                      <span>{destination.name}</span>
                      <p>
                        <TiLocation className="icon" /> {destination.location}
                      </p>
                    </div>
                    <span className="rating">{destination.rating}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Destinations;

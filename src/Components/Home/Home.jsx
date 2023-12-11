import React, { useEffect } from "react";
import "./Home.css";

// imported icons
import { AiOutlineSwapRight } from "react-icons/ai";

// imported assets
import Video from "../../assets/video.mp4";

import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="Home">
      <div className="videoBg">
        <video src={Video} autoPlay loop muted></video>
      </div>
      <div className="sectionText">
        <h1 data-aos="fade-up">Unlock Your Travel Dreams With Us!</h1>
        <p data-aos="fade-up">
          Discover the world's most adventurous nature, life is so short for a
          trip.
        </p>
        <button className="btn flex" data-aos="fade-up">
          GET STARTED
          <AiOutlineSwapRight className="icon" />
        </button>
        <div className="popularPlaces">
          <div className="content">
            <h3 data-aos="fade-up">Popular Places</h3>
            <div className="images flex" data-aos="fade-up"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

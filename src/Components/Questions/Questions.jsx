import React, { useState } from "react";
import "./Questions.css";
import Accordion from "./Accordion";

const Questions = () => {
  const [active, setActive] = useState("");
  return (
    <div className="questions section flex">
      <div className="container">
        <div className="secHeading">
          <h1>Frequently Asked Questions</h1>
        </div>
        <div className="secContainer grid">
          <div className="accordion grid">
            <Accordion
              title="How do I choose the right travel destination for me?"
              desc="Consider your interests, budget, desired experiences, and the type of environment you enjoy. Research destinations that align with your preferences and offer attractions or activities you find appealing."
              active={active}
              setActive={setActive}
            />
            <Accordion
              title="What are the best times to visit specific destinations?"
              desc="Research the climate, weather patters, and peak tourist seasons of the destination you're interested in. Opt for the shoulder seasons when the weather is pleasant, and crowds are fewer, if possible"
              active={active}
              setActive={setActive}
            />
            <Accordion
              title="How can I find budget-friendly travel options and deals?"
              desc="Look for travel deals, discounts on flights and destinations, and consider using travel apps or websites that offer competative prices. Being flexible with your travel dates can also help you find better deals."
              active={active}
              setActive={setActive}
            />
            <Accordion
              title="What essential items should I pack for my adventure?"
              desc="Pack appropriate clothing, toiletries, travel documents (passport, visa, etc.), essential mediations, and any specific gear needed for your adventure (eg. hiking boots, snorkling gear)."
              active={active}
              setActive={setActive}
            />
          </div>
          <div className="form">
            <div className="secHeading">
              <h4>Do you have any specific question?</h4>
              <p>
                Please fill the form below and our dedicated team will get
                intouch with you as soon as possible.
              </p>
            </div>
            <div className="formContent grid">
              <input type="email" placeholder="Enter email address" />
              <textarea
                name=""
                placeholder="Enter your question here"
                id=""
                cols="30"
                rows="10"
              ></textarea>
              <button className="btn">Submit Inquiry</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;

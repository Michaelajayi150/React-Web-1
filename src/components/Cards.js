import React from "react";
import "./Cards.css";
import { CardData, CardData2 } from "./CardData";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations</h1>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            {CardData.map((item) => {
              return (
                <CardItem
                  src={item.src}
                  text={item.text}
                  label={item.label}
                  path={item.path}
                />
              );
            })}
          </ul>
          <ul className="cards-items">
            {CardData2.map((item) => {
              return (
                <CardItem
                  src={item.src}
                  text={item.text}
                  label={item.label}
                  path={item.path}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

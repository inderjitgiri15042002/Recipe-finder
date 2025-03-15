import React from "react";
import CardItems from "./CardItems";

const Cards = ({ lists }) => {
  console.log(lists);
  return (
    <div className="card-container">
      <h1>All Food Recipe</h1>
      <div className="items">
        {lists.map((item, index) => {
          return <CardItems item={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Cards;

import React from "react";

const CardItems = ({ item }) => {
  console.log(item);
  const ingredients = [
    item.strIngredient1,
    item.strIngredient2,
    item.strIngredient3,
    item.strIngredient4,
    item.strIngredient5,
    item.strIngredient6,
    item.strIngredient7,
    item.strIngredient8,
  ].filter((ingredient) => ingredient); // Filter out any empty ingredients

  return (
    <div className="item">
      <img src={item.strMealThumb} alt={`Image of ${item.strMeal}`} />
      <div className="overlay">
        <b>Dish Name:</b> {item.strMeal}
        <hr />
        <h3>Ingredients</h3>
        {ingredients.map((ingredient, index) => (
          <p key={index}>{ingredient}</p>
        ))}
        <hr />
      </div>
    </div>
  );
};

export default CardItems;

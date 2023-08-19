import React from "react";
import './Star.css';

const StarRating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const filled = index + 1 <= Math.floor(rating); // Filled star if index + 1 is less than or equal to the whole part of the rating
    return <span key={index} className={filled ? "star-filled" : "star-empty"}>★</span>;
  });

  return <div className="flex">{stars}</div>;
};

export default StarRating;

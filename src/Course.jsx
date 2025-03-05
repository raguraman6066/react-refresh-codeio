import React from "react";
export const Course = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt="" />
      <h3>{props.name}</h3>
      <p>{props.price}</p>
      <span>{props.rating}</span>
    </div>
  );
};

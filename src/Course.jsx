import React, { useEffect, useState } from "react";
export const Course = (props) => {
  let [purchased, setPurchased] = useState(false);

  function BuyCourse(discount, event) {
    setPurchased(true);
    console.log(props.name, "purchased with discount", discount, event);
  }
  useEffect(() => {
    console.log("use effect called inside");
    console.log(purchased);
  }, []);
  return (
    <div className="card">
      <img src={props.image} alt="" />
      <h3>{props.name}</h3>
      <p>{props.price}</p>
      {/* <span>{props.rating}</span> */}
      <button
        onClick={(event) => {
          BuyCourse(20, event);
        }}
      >
        Buy Now
      </button>
      <button
        onClick={(event) => {
          props.updateMethod(props.id);
        }}
      >
        Delete
      </button>
      <p>{purchased ? "Already purchased" : "Buy Now"}</p>
    </div>
  );
};

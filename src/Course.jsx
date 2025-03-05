import React from "react";
export const Course = (props) => {
  function BuyCourse(discount, event) {
    console.log(props.name, "purchased with discount", discount, event);
  }

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
    </div>
  );
};

import React from "react";
import HTML from "./assets/download.png";
import { Course } from "./Course";
export const CourseList = () => {
  const courses = [
    { name: "html course", price: "$122", rating: 5, image: HTML },
    {
      name: "css course",
      price: "$150",
      rating: 4,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpXaDo9xQfNOh-0nAtgdMzekEMdTbESQoFhQ&s",
    },
    { name: "js course", price: "$200", rating: 5, image: HTML },
    { name: "bootstrap course", price: "$500", rating: 4, image: HTML },
  ];

  const courseList = courses.map((e) => (
    <Course name={e.name} image={e.image} price={e.price} rating={e.rating} />
  ));

  return <>{courseList}</>;
};

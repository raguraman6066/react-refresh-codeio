import React, { useEffect, useState } from "react";
import HTML from "./assets/download.png";
import { Course } from "./Course";
export const CourseList = () => {
  const [courses, updateCourse] = useState([
    { id: 1, name: "html course", price: 122, rating: 5, image: HTML },
    {
      id: 2,
      name: "css course",
      price: 150,
      rating: 4,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpXaDo9xQfNOh-0nAtgdMzekEMdTbESQoFhQ&s",
    },
    { id: 4, name: "bootstrap course", price: 500, rating: 4, image: HTML },
    { id: 3, name: "js course", price: 200, rating: 5, image: HTML },
  ]);

  useEffect(() => {
    console.log("use effect called");
  }, []);

  function deleteItem(id) {
    let updatedList = courses.filter((e) => e.id != id);
    updateCourse(updatedList);
  }
  courses.sort((a, b) => {
    return b.price - a.price;
  });

  const vfmcourses = courses.filter((e) => e.price > 200);

  const courseList = courses.map((e) => (
    <Course
      key={e.id}
      id={e.id}
      name={e.name}
      image={e.image}
      price={e.price}
      rating={e.rating}
      updateMethod={deleteItem}
    />
  ));

  return <>{courseList}</>;
};

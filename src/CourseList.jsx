import React, { useEffect, useState } from "react";
import HTML from "./assets/download.png";
import { Course } from "./Course";
export const CourseList = () => {
  const [courses, updateCourse] = useState([]);

  useEffect(() => {
    console.log("use effect called");
    fetch("http://localhost:3000/courses")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        updateCourse(data);
      });
  }, []);

  function deleteItem(id) {
    let updatedList = courses.filter((e) => e.id != id);
    updateCourse(updatedList);
  }
  if (!courses) {
    return <></>;
  }
  // const vfmcourses = courses.filter((e) => e.price > 200);
  // courses.sort((a, b) => {
  //   return b.price - a.price;
  // });
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
// npx json-server --watch data/dummyData.json --port 3000 --static ./data

import React, { useEffect, useState } from "react";
import HTML from "./assets/download.png";
import { Course } from "./Course";
export const CourseList = () => {
  const [courses, updateCourse] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(
      () =>
        fetch("http://localhost:3000/courses")
          .then((response) => {
            if (!response.ok) {
              throw Error("Could't retrieve data");
            }
            console.log(response);
            return response.json();
          })
          .then((data) => {
            console.log(data);
            updateCourse(data);
          })
          .catch((error) => {
            console.log(error.message);
            setError(error.message);
          }),
      3000
    );
  }, []);

  function deleteItem(id) {
    let updatedList = courses.filter((e) => e.id != id);
    updateCourse(updatedList);
  }
  if (!courses || courses.length == 0) {
    return (
      <>
        {!error && (
          <img
            src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca.gif"
            width={200}
            alt=""
          />
        )}
        {error && <p>{error}</p>}
      </>
    );
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

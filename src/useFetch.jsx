import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [courses, updateCourse] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(
      () =>
        fetch(url)
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

  return [courses, error];
};

export default useFetch;

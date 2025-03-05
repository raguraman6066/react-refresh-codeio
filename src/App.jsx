import "./App.css";
import { Course } from "./Course";
import Html from "./assets/download.png";

function App() {
  return (
    <>
      <Course name="HTML" price="$100" image={Html} />
      <Course
        name="CSS"
        price="$150"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpXaDo9xQfNOh-0nAtgdMzekEMdTbESQoFhQ&s"
      />
      <Course name="Js" price="$200" image={Html} />
    </>
  );
}

export default App;

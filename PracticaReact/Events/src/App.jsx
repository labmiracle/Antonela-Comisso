import "./App.css";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [jsonData, setJsonData] = useState();
  const [color, setColor] = useState();

  const fetchJSONData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    setJsonData(response.data);
    setColor("paint");
  };

  return (
    <div>
      <div>Ejercicoi N°1</div>
      <button className="button" onClick={fetchJSONData}>
        Click to load JSON
      </button>
      <p className={color}>{JSON.stringify(jsonData)}</p>
    </div>
  );
}

export default App;

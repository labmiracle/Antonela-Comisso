import "./App.css";
import React, { useState } from "react";

function App2() {
  const [inputText, setInputText] = useState("");
  const [color, setColor] = useState();

  const handleInputChange = (event) => {
    setInputText(event.target.value);
    setColor("input");
  };

  return (
    <>
      <div>Ejercicoi N°2</div>
      <div>
        <input type="text" value={inputText} onChange={handleInputChange} />
        <div></div>
        <text className={color}>{inputText}</text>
      </div>
    </>
  );
}

export default App2;

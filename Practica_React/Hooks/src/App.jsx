import { useState } from "react";

import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [word, setWord] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
    const replaceWord = inputText.replaceAll("a", "b");
    setWord(replaceWord);
  };

  return (
    <>
      <div>
        <div>Ingrese texto:</div>
        <input
          type="text"
          value={inputText}
          onChange={(event) => {
            setInputText(event.target.value);
          }}
        />
        <text>{word}</text>
      </div>
    </>
  );
}

export default App;

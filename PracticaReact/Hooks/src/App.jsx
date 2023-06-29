import react from "react";

import "./App.css";

function App() {
  const [inputText, setInputText] = react.useState("");
  const [word, setWord] = react.useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
    const replaceWord = inputText.replaceAll("a", "b");
    setWord(replaceWord);
  };

  return (
    <>
      <div>
        <div>Ingrese texto:</div>
        <input type="text" value={inputText} onChange={handleInputChange} />
        <text>{word}</text>
      </div>
    </>
  );
}

export default App;

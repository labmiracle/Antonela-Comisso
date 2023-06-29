import { useState } from "react";

import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [campos, setCampos] = useState("");
  function handleClick() {
    console.log(name + lastname);
    setCampos(name + " " + lastname);
    return campos;
  }
  return (
    <>
      <form>
        Nombre:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        Apellido:
        <input
          type="text"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
      </form>
      <button className="button" onClick={handleClick}>
        Enviar
      </button>
      <p>{campos}</p>
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";

export default function App2() {
  const [text, setText] = useState("");
  const addLetra = () => {
    const arrLetras =
      "sliceextraeeltextodeunacadenaydevuelveunanuevacadena.Loscambiosenel textodeunacadenanoafectanalaotracadena.".split(
        ""
      );

    const letra = arrLetras[Math.floor(Math.random() * arrLetras.length)];
    return letra;
  };

  const incrementar = () => {
    setText(text + addLetra());
  };

  const decrementar = () => {
    setText(text.slice(0, -1));
  };

  return (
    <>
      <div>
        <p>Ejercicio N°2</p>
      </div>
      <div className="card">
        <button onClick={decrementar}>Decremenar</button>
        <button onClick={incrementar}>Incrementar</button>
      </div>
      <p className="screen">STRING: {text}</p>
    </>
  );
}

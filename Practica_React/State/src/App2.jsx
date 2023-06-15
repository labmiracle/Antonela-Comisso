import { useState } from "react";
import Decrementar from "./components/Decrementar";
import Incrementar from "./components/Incrementar";
import Screen from "./components/Screen";
import "./App.css";

export default function App2() {
  const [text, setText] = useState("");
  function addLetra() {
    const arrLetras =
      "sliceextraeeltextodeunacadenaydevuelveunanuevacadena.Loscambiosenel textodeunacadenanoafectanalaotracadena.".split(
        ""
      );
    const letra = arrLetras[Math.floor(Math.random() * arrLetras.length)];
    return letra;
  }
  function incrementar() {
    setText(text + addLetra());
  }
  function decrementar() {
    setText(text.slice(0, -1));
  }
  return (
    <>
      <div>
        <p>Ejercicio N°2</p>
      </div>

      <Decrementar decrementar={decrementar} />
      <Incrementar incrementar={incrementar} />
      <Screen text={text} />
    </>
  );
}

import { useState } from "react";
import "./App.css";

export function App() {
  const [userCondition, setUsercondition] = useState(false);
  function handleClickcerrar() {
    setUsercondition(false);
  }
  function handleClickiniciar() {
    setUsercondition(true);
  }

  if (userCondition) {
    return (
      <>
        <p>Esta página solo puedo verla por que estoy logueado.</p>
        <button className="button" onClick={handleClickcerrar}>
          Cerrar Sesión
        </button>
      </>
    );
  } else {
    return (
      <>
        <p> "Inicia sesión para ver contenido privado"</p>
        <button className="button" onClick={handleClickiniciar}>
          Iniciar Sesión
        </button>
      </>
    );
  }
}

export default App;

import React from "react";
import "./App.css";
import DuplicateChecker from "../components/Set_Ejercicio_N1";
import UniqueElements from "../components/Set_Ejercicio_N2";
import LinkedListExample from "../components/ListasEnlazadas_Ejercicio_N1";

const App: React.FC = () => {
  return (
    <>
      <DuplicateChecker />
      <UniqueElements />
      <LinkedListExample />
    </>
  );
};

export default App;

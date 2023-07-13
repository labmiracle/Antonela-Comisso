import React from "react";
import "./App.css";
import DuplicateChecker from "../components/Set_Ejercicio_N1";
import UniqueElements from "../components/Set_Ejercicio_N2";
import LinkedListEjercicioN1 from "../components/ListasEnlazadas_Ejercicio_N1";
import LinkedListEjercicioN2 from "../components/ListasEnlazadas_Ejercicio_N2";
const App: React.FC = () => {
  return (
    <>
      <DuplicateChecker />
      <UniqueElements />
      <LinkedListEjercicioN1 />
      <LinkedListEjercicioN2 />
    </>
  );
};

export default App;

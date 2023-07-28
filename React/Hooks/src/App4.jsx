import React, { useEffect, useState } from "react";
import "./App.css";

function App4() {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    const obtenerTareas = async () => {
      try {
        const respuesta = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const datos = await respuesta.json();
        setTareas(datos);
      } catch (error) {
        console.error("Error al obtener las tareas:", error);
      }
    };

    obtenerTareas();
  }, []);

  return (
    <div>
      <h2>Tareas:</h2>
      <ul className="pintar">
        {tareas.map((tarea) => (
          <li key={tarea.id}>{tarea.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App4;

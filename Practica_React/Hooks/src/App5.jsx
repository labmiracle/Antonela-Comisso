///Extrar la lógica de la llamada a la API a un hook personalizado y usarlo///
import { useEffect, useState } from "react";

function useTareas() {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    const Tareas = async () => {
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

    Tareas();
  }, []);

  return tareas;
}

function App5() {
  const tareas = useTareas();

  return (
    <p>
      {tareas.map((tarea) => (
        <li key={tarea.id}>{tarea.title}</li>
      ))}
    </p>
  );
}

export default App5;

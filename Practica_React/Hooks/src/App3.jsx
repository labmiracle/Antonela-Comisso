import { useEffect } from "react";

function App3({ mensaje }) {
  useEffect(() => {
    console.log("Actualizando!");
  }, [mensaje]);

  return <p>{mensaje}</p>;
}

export default App3;

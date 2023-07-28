import { useState } from "react";
import "./App.css";

function App3() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <div>Ejercico N°3</div>
      <div>
        <label for="fruta">Selecione una fruta:</label>
      </div>

      <select
        onChange={handleChange}
        name="fruta"
        id="fruta"
        className="button"
      >
        <option value="Manzana">Manzana</option>
        <option value="Durazno">Durazno</option>
        <option value="Pera">Pera</option>
        <option value="Frutilla">Frutilla</option>
      </select>

      <div>
        <text>Suelección es: {value}</text>
      </div>
    </div>
  );
}

export default App3;

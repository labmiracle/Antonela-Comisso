import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <p>Ejercicio N°1</p>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count - 1)}>-</button>
        <button onClick={() => setCount((count) => count + 1)}>+</button>
      </div>
      <div>
        <a>CONTADOR: {count}</a>
      </div>
    </>
  );
}

export default App;

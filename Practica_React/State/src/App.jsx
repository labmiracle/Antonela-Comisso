import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  let [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });
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

function Screen({ value }) {
  return <div className="screen">{value}</div>;
}

const Wrapper = ({ children }) => {
  return <div className="wrapper">{children}</div>;
};

const ButtonBox = ({ children }) => {
  return <div className="buttonBox">{children}</div>;
};

const Button = ({ className, value, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
};
const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];
export default App;

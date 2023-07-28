import React, { useState } from "react";

const App2 = () => {
  const [mostrarComponente, setMostrarComponente] = useState(true);

  const handleClick = () => {
    console.log("Desmontado!");
    setMostrarComponente(false);
  };

  return (
    <div>
      {mostrarComponente ? (
        <div>
          <ComponenteDesmontable />
          <button onClick={handleClick}>Desmontar</button>
        </div>
      ) : null}
    </div>
  );
};

function ComponenteDesmontable() {
  return <p className="logo">&#128512;</p>;
}

export default App2;

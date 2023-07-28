import { createContext, useContext, useState } from "react";
import "./App.css";
const LanContext = createContext(null);

function App() {
  const [lan, setLan] = useState("ENG");
  const [msn, setMsn] = useState("Change Language");

  function changeLan() {
    if (lan === "ENG") {
      setLan("ESP");
      setMsn("Cambie Idioma");
    } else {
      setLan("ENG");
      setMsn("Change Language");
    }
  }
  return (
    <LanContext.Provider value={lan}>
      <Parrafo />
      <button className="button" onClick={changeLan}>
        {msn}
      </button>
    </LanContext.Provider>
  );
}

function Parrafo() {
  const lan = useContext(LanContext);
  if (lan === "ENG") {
    return (
      <p>
        React (also known as React.js or ReactJS) is a free and open-source
        front-end JavaScript library for building user interfaces based on
        components. It is maintained by Meta (formerly Facebook) and a community
        of individual developers and companies.
      </p>
    );
  } else {
    return (
      <p>
        React (también llamada React.js o ReactJS) es una biblioteca Javascript
        de código abierto diseñada para crear interfaces de usuario con el
        objetivo de facilitar el desarrollo de aplicaciones en una sola página.
        Es mantenido por Facebook y la comunidad de software libre. En el
        proyecto hay más de mil desarrolladores libres.
      </p>
    );
  }
}

export default App;

import { useState } from "react";
import spriteSheet from "./itemMC.png";
import "./App.css";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [itemSelected, setItemSelected] = useState("HOLA");

  function handleClick(i) {
    const nextSquares = squares.slice();
    if (itemSelected === "COAL") {
      nextSquares[i] = "C";
    }
    if (itemSelected === "ROCK") {
      nextSquares[i] = "R";
    }
    if (itemSelected === "STICK") {
      nextSquares[i] = "S";
    }
    setSquares(nextSquares);
  }

  function handleCoalclick() {
    setItemSelected("COAL");
    return;
  }

  function handleStickclick() {
    setItemSelected("STICK");
    return;
  }

  function handleRockclick() {
    setItemSelected("ROCK");
    return;
  }

  return (
    <>
      <h2>Crafting Table</h2>
      <div className="status"> {itemSelected}</div>
      <button
        className="button"
        onClick={() => setSquares(Array(9).fill(null))}
      >
        Clear Table
      </button>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />

        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
      <div className="space"></div>
      <h2>Inventory</h2>

      <div className="board-row">
        <ItemMineCraft
          frameXcoordinate={2}
          frameYcoordinate={4}
          onMCClick={() => handleCoalclick()}
        />
      </div>

      <div className="board-row">
        <ItemMineCraft
          frameXcoordinate={1}
          frameYcoordinate={2}
          onMCClick={() => handleStickclick()}
        />
      </div>
      <div className="board-row">
        <ItemMineCraft
          frameXcoordinate={1}
          frameYcoordinate={1}
          onMCClick={() => handleRockclick()}
        />
      </div>
    </>
  );
}

function ItemMineCraft({ frameXcoordinate, frameYcoordinate, onMCClick }) {
  return (
    <button className="square" onClick={onMCClick}>
      <ItemMC
        frameXcoordinate={frameXcoordinate}
        frameYcoordinate={frameYcoordinate}
      />
    </button>
  );
}

function ItemMC({ frameXcoordinate, frameYcoordinate }) {
  const frameWidth = 64;
  const frameHeight = 64;

  const spriteStyle = {
    backgroundImage: `url(${spriteSheet})`,
    backgroundPosition: `-${frameWidth * frameXcoordinate}px -${
      frameYcoordinate * frameHeight
    }px`,
    width: frameWidth,
    height: frameHeight,
  };

  return <div style={spriteStyle}></div>;
}

const Inventory = {
  coal: [2, 4],
  stick: [1, 2],
};

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

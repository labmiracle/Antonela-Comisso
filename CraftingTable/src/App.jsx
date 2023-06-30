import { useState } from "react";
import spriteSheet from "./itemMC.png";
import "./App.css";

export default function Board() {
  //const [squares, setSquares] = useState(Array(9).fill(null));
  const [itemSelected, setItemSelected] = useState();
  const [xCoord, setXcoord] = useState(Array(9).fill(2));
  const [yCoord, setYcoord] = useState(Array(9).fill(9));

  function setArray(oldArray, positionInarray, replceFor) {
    const newArray = [...oldArray];
    newArray[positionInarray] = replceFor;
    return newArray;
  }

  function handleClick(i) {
    let nextXcoord;
    let nextYcoord;

    if (itemSelected === "COAL") {
      nextXcoord = 2;
      nextYcoord = 4;
    }

    if (itemSelected === "ROCK") {
      nextXcoord = 1;
      nextYcoord = 1;
    }
    if (itemSelected === "STICK") {
      nextXcoord = 1;
      nextYcoord = 2;
    }

    setXcoord(setArray(xCoord, i, nextXcoord));
    setYcoord(setArray(yCoord, i, nextYcoord));
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

  function setSquares(setX, setY) {
    setXcoord(Array(9).fill(2));
    setYcoord(Array(9).fill(9));
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
        <ItemMC
          frameXcoordinate={xCoord[0]}
          frameYcoordinate={yCoord[0]}
          onSquareClick={() => handleClick(0)}
        />
        <ItemMC
          frameXcoordinate={xCoord[1]}
          frameYcoordinate={yCoord[1]}
          onSquareClick={() => handleClick(1)}
        />
        <ItemMC
          frameXcoordinate={xCoord[2]}
          frameYcoordinate={yCoord[2]}
          onSquareClick={() => handleClick(2)}
        />
      </div>
      <div className="board-row">
        <ItemMC
          frameXcoordinate={xCoord[3]}
          frameYcoordinate={yCoord[3]}
          onSquareClick={() => handleClick(3)}
        />
        <ItemMC
          frameXcoordinate={xCoord[4]}
          frameYcoordinate={yCoord[4]}
          onSquareClick={() => handleClick(4)}
        />
        <ItemMC
          frameXcoordinate={xCoord[5]}
          frameYcoordinate={yCoord[5]}
          onSquareClick={() => handleClick(5)}
        />
      </div>
      <div className="board-row">
        <ItemMC
          frameXcoordinate={xCoord[6]}
          frameYcoordinate={yCoord[6]}
          onSquareClick={() => handleClick(6)}
        />
        <ItemMC
          frameXcoordinate={xCoord[7]}
          frameYcoordinate={yCoord[7]}
          onSquareClick={() => handleClick(7)}
        />
        <ItemMC
          frameXcoordinate={xCoord[8]}
          frameYcoordinate={yCoord[8]}
          onSquareClick={() => handleClick(8)}
        />
      </div>
      <div className="space"></div>
      ---------------------------------------------------
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
        onSquareClick={onMCClick}
      />
    </button>
  );
}

function ItemMC({ frameXcoordinate, frameYcoordinate, onSquareClick }) {
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

  return (
    <button className="square" onClick={onSquareClick}>
      <div style={spriteStyle}></div>
    </button>
  );
}

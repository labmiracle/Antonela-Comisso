import { useState } from "react";
import spriteSheet from "./itemMC.png";
import "./App.css";

export default function Board() {
  const [itemSelected, setItemSelected] = useState([2, 9]);
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

    if (itemSelected[0] === xCoord[i] && itemSelected[1] === yCoord[i]) {
      nextXcoord = 2;
      nextYcoord = 9;
    } else {
      if (itemSelected[0] === 0 && itemSelected[1] === 0) {
        nextXcoord = 0;
        nextYcoord = 0;
      }

      if (itemSelected[0] === 1 && itemSelected[1] === 1) {
        nextXcoord = 1;
        nextYcoord = 1;
      }
      if (itemSelected[0] === 1 && itemSelected[1] === 2) {
        nextXcoord = 1;
        nextYcoord = 2;
      }
      if (itemSelected[0] === 6 && itemSelected[1] === 6) {
        nextXcoord = 6;
        nextYcoord = 6;
      }
    }

    setXcoord(setArray(xCoord, i, nextXcoord));
    setYcoord(setArray(yCoord, i, nextYcoord));
  }

  function handleIronclick() {
    setItemSelected([0, 0]);
    return;
  }

  function handleStickclick() {
    setItemSelected([1, 2]);
    return;
  }

  function handleRockclick() {
    setItemSelected([1, 1]);
    return;
  }

  function handleBoxclick() {
    setItemSelected([6, 6]);
    return;
  }

  function clearSquares(setX, setY) {
    setXcoord(Array(9).fill(2));
    setYcoord(Array(9).fill(9));
    setResult(false);
  }

  let response = checkCraft(xCoord, yCoord);

  function checkCraft(xCoord, yCoord) {
    const hachaXarrays = [
      [0, 0, 2, 2, 1, 2, 2, 2, 2],
      [2, 0, 0, 2, 2, 1, 2, 2, 2],
      [2, 2, 2, 0, 0, 2, 2, 1, 2],
      [2, 2, 2, 2, 0, 0, 2, 2, 1],
    ];
    const hachaYarrays = [
      [0, 0, 9, 9, 2, 9, 9, 9, 9],
      [9, 0, 0, 9, 9, 2, 9, 9, 9],
      [9, 9, 9, 0, 0, 9, 9, 2, 9],
      [9, 9, 9, 9, 0, 0, 9, 9, 2],
    ];
    const matchXarray = hachaXarrays.filter((oneXarray) =>
      xCoord.every((element, index) => element === oneXarray[index])
    );

    const matchYarray = hachaYarrays.filter((oneYarray) =>
      yCoord.every((element, index) => element === oneYarray[index])
    );

    if (matchXarray.length != 0 && matchYarray.length != 0) {
      return true;
    }
  }

  return (
    <>
      <h2>Crafting Table</h2>
      <button
        className="button"
        onClick={() => clearSquares(Array(9).fill(null))}
      >
        Clear Crafting Table
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
        <div className="status">
          <Craftresult result={response} />
        </div>
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
      ---------------------------------------------------
      <h2>Inventory and Selection</h2>
      <div className="board-row">
        <ItemMineCraft
          frameXcoordinate={0}
          frameYcoordinate={0}
          onMCClick={() => handleIronclick()}
        />
        <ItemMineCraft
          frameXcoordinate={1}
          frameYcoordinate={2}
          onMCClick={() => handleStickclick()}
        />
        <ItemMineCraft
          frameXcoordinate={1}
          frameYcoordinate={1}
          onMCClick={() => handleRockclick()}
        />
        <ItemMineCraft
          frameXcoordinate={6}
          frameYcoordinate={6}
          onMCClick={() => handleBoxclick()}
        />
        <div className="status">
          <ItemMineCraft
            frameXcoordinate={itemSelected[0]}
            frameYcoordinate={itemSelected[1]}
            onMCClick={() => null}
          />
        </div>
      </div>
      ---------------------------------------------------
      <h2>Posible Crafts</h2>
      <div className="board-row">
        <ItemMineCraft
          frameXcoordinate={1}
          frameYcoordinate={5}
          onMCClick={() => null}
        />
        <div className="board-row">
          <ItemMineCraft
            frameXcoordinate={2}
            frameYcoordinate={1}
            onMCClick={() => null}
          />
        </div>
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

function Craftresult({ result }) {
  if (result === true) {
    return (
      <div>
        <ItemMC
          frameXcoordinate={1}
          frameYcoordinate={5}
          onSquareClick={() => null}
        />
      </div>
    );
  } else {
    return (
      <div>
        <ItemMC
          frameXcoordinate={2}
          frameYcoordinate={9}
          onSquareClick={() => null}
        />
      </div>
    );
  }
}

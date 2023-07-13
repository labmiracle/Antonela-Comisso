import React from "react";

const UniqueElements: React.FC = () => {
  const array1 = [1, 2, 3, 4, 5];
  const array2 = [4, 5, 6, 7, 8];

  const getUniqueElements = (): number[] => {
    const set = new Set([...array1, ...array2]);
    return Array.from(set);
  };

  const uniqueArray = getUniqueElements();

  return (
    <div>
      <h2>Ejercicio N°2: Elementos únicos</h2>
      <p>Array 1: {array1.join(", ")}</p>
      <p>Array 2: {array2.join(", ")}</p>
      <p>Elementos únicos: {uniqueArray.join(", ")}</p>
    </div>
  );
};

export default UniqueElements;

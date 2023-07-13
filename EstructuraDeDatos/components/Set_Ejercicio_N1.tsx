import React from "react";
const DuplicateChecker: React.FC = () => {
  const numbers = [1, 2, 3, 4, 5, 1, 2];

  const hasDuplicates = (): boolean => {
    const numberSet = new Set(numbers);
    return numbers.length !== numberSet.size;
  };

  return (
    <div>
      <h2>Ejercicios N°1: Verificación de duplicados</h2>
      <p>Números: {numbers.join(", ")}</p>
      {hasDuplicates() ? (
        <p>Hay duplicados en el array!</p>
      ) : (
        <p>No hay duplicados en el array.</p>
      )}
    </div>
  );
};

export default DuplicateChecker;

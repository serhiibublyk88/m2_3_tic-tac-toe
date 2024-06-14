import { useState } from "react";
import { FieldContainer } from "./components/GameLayout/Field/FieldContainer";
import { InformationContainer } from "./components/GameLayout/Information/InformationContainer";

import "./App.css";

export const App = () => {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const [field, setField] = useState(["", "", "", "", "", "", "", "", ""]);

  const handleCellClick = (index) => {
    if (!field[index] && !isGameEnded) {
      const nextPlayer = currentPlayer === "X" ? "O" : "X";
      const updatedField = [...field];
      updatedField[index] = currentPlayer;
      setField(updatedField);
      setCurrentPlayer(nextPlayer);
      checkGameStatus(updatedField, nextPlayer);
    }
  };

  const checkGameStatus = (field, currentPlayer) => {
    // Проверка на победу по строкам, столбцам и диагоналям
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // горизонтали
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // вертикали
      [0, 4, 8],
      [2, 4, 6], // диагонали
    ];

    for (let line of lines) {
      const [a, b, c] = line;
      if (field[a] && field[a] === field[b] && field[a] === field[c]) {
        setIsGameEnded(true);
        setCurrentPlayer(field[a]); // Устанавливаем победителя
        return;
      }
    }

    // Проверка на ничью
    if (!field.includes("")) {
      setIsGameEnded(true);
      setIsDraw(true);
    }
  };

  const handleReset = () => {
    setCurrentPlayer("X");
    setIsGameEnded(false);
    setIsDraw(false);
    setField(["", "", "", "", "", "", "", "", ""]);
  };

  return (
    <div className="game">
      <InformationContainer
        currentPlayer={currentPlayer}
        isGameEnded={isGameEnded}
        isDraw={isDraw}
      />
      <FieldContainer
        field={field}
        currentPlayer={currentPlayer}
        onCellClick={handleCellClick}
      />
      <button className="reset-button" onClick={handleReset}>
        Restart
      </button>
    </div>
  );
};

import React, { useState } from "react";
import '../scss/css/TicTacToe.css';
const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(board);

  const handleClick = (index) => {
    if (board[index] || winner) return;
    const newBoard = board.slice();
    newBoard[index] = xIsNext ? "X" : "O";
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };
  const resetBoard = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };
  const renderSquare = (i) => (
    <button 
      onClick={() => handleClick(i)}
      style={{ width: "60px", height: "60px", fontSize: "24px" }}
    >
      {board[i]}
    </button>
  );

  return (
    <div className="tictactoe-container">
      <h2>Tic Tac Toe</h2>
      <div className="status">
        {winner ? <h3>Winner: {winner}</h3> : <h3>Next Player: {xIsNext ? "X" : "O"}</h3>}
      </div>
      <div className="board">
        {board.map((_, i) => renderSquare(i))}
      </div>
      <button className="reset-button" onClick={resetBoard}>Reset Game</button>
    </div>
  );
};

function calculateWinner(squares) {
  const lines = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]         
  ];
  for (let line of lines) {
    const [a,b,c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default TicTacToe;
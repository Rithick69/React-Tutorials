import React, { useState } from "react";
import "./style.css";
import { Patterns } from "./Patterns";
import Board from "./Board";
import ScoreBoard from "./ScoreBoard";

function Game() {
	const [board, setBoard] = useState(Array(9).fill(""));
	const [xPlaying, setXPlaying] = useState(true);
	const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
	const [gameOver, setGameOver] = useState(false);

	const handleBoxClick = (boxIdx) => {
		// Step 1: Update the board
		const updatedBoard = board.map((value, idx) => {
			if (idx === boxIdx) {
				return xPlaying ? "X" : "O";
			} else {
				return value;
			}
		});

		setBoard(updatedBoard);

		// Step 2: Check if either player has won the game
		const winner = checkWinner(updatedBoard);

		if (winner) {
			if (winner === "O") {
				let { oScore } = scores;
				oScore += 1;
				setScores({ ...scores, oScore });
			} else {
				let { xScore } = scores;
				xScore += 1;
				setScores({ ...scores, xScore });
			}
		}

		// Step 3: Change active player
		setXPlaying(!xPlaying);
	};

	const checkWinner = (board) => {
		for (let i = 0; i < Patterns.length; i++) {
			const [x, y, z] = Patterns[i];

			// Iterate through win conditions and check if either player satisfies them
			if (board[x] && board[x] === board[y] && board[y] === board[z]) {
				setGameOver(true);
				return board[x];
			}
		}
	};

	const resetGame = () => {
		setGameOver(false);
		setBoard(Array(9).fill(""));
		setXPlaying(xPlaying);
	};
	return (
		<>
			<div className="App">
				<ScoreBoard scores={scores} xPlaying={xPlaying} />
				<Board board={board} onClick={gameOver ? resetGame : handleBoxClick} />
				<button className="reset-btn" onClick={resetGame}>
					Reset
				</button>
			</div>
		</>
	);
}

export default Game;

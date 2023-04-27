import React, { useState } from "react";
import "./style.css";
import { Patterns } from "./Patterns";
import Board from "./Board";
import ScoreBoard from "./ScoreBoard";
import { Tooltip } from "@mui/material";

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
	};

	const resetScore = () => {
		setScores({ xScore: 0, oScore: 0 });
		setGameOver(false);
		setBoard(Array(9).fill(""));
	};
	return (
		<>
			<div className="App">
				<h1 className="text-center mt-5">Tic Tac Toe</h1>
				<ScoreBoard
					scores={scores}
					xPlaying={xPlaying}
					resetScore={resetScore}
				/>
				<Board board={board} onClick={gameOver ? resetGame : handleBoxClick} />
				<Tooltip title="Reset Board">
					<button className="reset-btn" onClick={resetGame}>
						Reset
					</button>
				</Tooltip>
			</div>
		</>
	);
}

export default Game;

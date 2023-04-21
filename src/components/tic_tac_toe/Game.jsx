import React, { useEffect, useState } from "react";
import "./index.css";
import Square from "./Square";
import { Patterns } from "./Patterns";

function Game() {
	const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
	const [player, setPlayer] = useState("O");
	const [result, setResult] = useState({ winner: "none", state: "none" });

	useEffect(() => {
		checkWin();
		checkTie();
		if (player === "X") {
			setPlayer("O");
		} else {
			setPlayer("X");
		}
	}, [board]);

	useEffect(() => {
		if (result.state !== "none") {
			alert(`Game Over ${result.winner}`);
		}
	}, [result]);

	const selectedSq = (square) => {
		setBoard(
			board.map((val, idx) => {
				if (idx === square && val === "") {
					return player;
				}
				return val;
			})
		);
	};

	const checkWin = () => {
		Patterns.forEach((curr) => {
			const firstPlayer = board[curr[0]];
			if (firstPlayer === "") return;
			let foundWinner = true;
			curr.forEach((idx) => {
				if (board[idx] !== firstPlayer) {
					foundWinner = false;
				}
			});

			if (foundWinner) {
				setResult({ winner: player, state: "won" });
			}
		});
	};
	const checkTie = () => {
		let filledBoxes = true;

		board.forEach((square) => {
			if (square === "") {
				filledBoxes = false;
			}
		});

		if (filledBoxes) {
			setResult({ winner: "No One", state: "Tie" });
		}
	};
	return (
		<>
			<h1>Tic Tac Toe Game</h1>

			<div className="app">
				<div className="board">
					<div className="row">
						<Square
							val={board[0]}
							selectedSq={() => {
								selectedSq(0);
							}}
						/>
						<Square
							val={board[1]}
							selectedSq={() => {
								selectedSq(1);
							}}
						/>
						<Square
							val={board[2]}
							selectedSq={() => {
								selectedSq(2);
							}}
						/>
					</div>
					<div className="row">
						<Square
							val={board[3]}
							selectedSq={() => {
								selectedSq(3);
							}}
						/>
						<Square
							val={board[4]}
							selectedSq={() => {
								selectedSq(4);
							}}
						/>
						<Square
							val={board[5]}
							selectedSq={() => {
								selectedSq(5);
							}}
						/>
					</div>
					<div className="row">
						<Square
							val={board[6]}
							selectedSq={() => {
								selectedSq(6);
							}}
						/>
						<Square
							val={board[7]}
							selectedSq={() => {
								selectedSq(7);
							}}
						/>
						<Square
							val={board[8]}
							selectedSq={() => {
								selectedSq(8);
							}}
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default Game;

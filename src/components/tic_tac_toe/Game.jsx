import React, { useState } from "react";
import "./index.css";
import Square from "./Square";
import { Palette } from "@mui/icons-material";

function Game() {
	const [board, setBoard] = useState(["X", "", "", "", "", "", "", "", ""]);
	const [player, setPlayer] = useState("X");

	const selectedSq = (square) => {
		setBoard(
			board.map((val, idx) => {
				if (idx == square && val == "") {
					return player;
				}
				return val;
			})
		);

		if (player === "X") {
			setPlayer("O");
		} else {
			setPlayer("X");
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

import React, { useState } from "react";
import "./index.css";
import Square from "./Square";

function Game() {
	const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
	return (
		<>
			<h1>Tic Tac Toe Game</h1>

			<div className="app">
				<div className="board">
					<div className="row">
						<Square
							val={board[0]}
							selectedSq={() => {
								alert("index: 0");
							}}
						/>
						<Square
							val={board[1]}
							selectedSq={() => {
								alert("index: 1");
							}}
						/>
						<Square
							val={board[2]}
							selectedSq={() => {
								alert("index: 2");
							}}
						/>
					</div>
					<div className="row">
						<Square
							val={board[3]}
							selectedSq={() => {
								alert("index: 3");
							}}
						/>
						<Square
							val={board[4]}
							selectedSq={() => {
								alert("index: 4");
							}}
						/>
						<Square
							val={board[5]}
							selectedSq={() => {
								alert("index: 5");
							}}
						/>
					</div>
					<div className="row">
						<Square
							val={board[6]}
							selectedSq={() => {
								alert("index: 6");
							}}
						/>
						<Square
							val={board[7]}
							selectedSq={() => {
								alert("index: 7");
							}}
						/>
						<Square
							val={board[8]}
							selectedSq={() => {
								alert("index: 8");
							}}
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default Game;

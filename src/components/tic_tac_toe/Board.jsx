import React from "react";
import Square from "./Square";

function Board({ board, onClick }) {
	return (
		<>
			<div className="board">
				{board.map((value, idx) => {
					return (
						<Square val={value} onClick={() => value === "" && onClick(idx)} />
					);
				})}
			</div>
		</>
	);
}

export default Board;

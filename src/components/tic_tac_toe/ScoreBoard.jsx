import { Refresh } from "@mui/icons-material";
import { Button, Tooltip } from "@mui/material";
import React from "react";

function ScoreBoard({ scores, xPlaying, resetScore }) {
	const { xScore, oScore } = scores;
	return (
		<>
			<div className="main">
				<div className="scoreboard">
					<span className={`score x-score ${!xPlaying && "inactive"}`}>
						X - {xScore}
					</span>
					<span className={`score o-score ${xPlaying && "inactive"}`}>
						O - {oScore}
					</span>
				</div>
				<div>
					<Tooltip title="Reset Score">
						<Button onClick={resetScore}>
							<Refresh />
						</Button>
					</Tooltip>
				</div>
			</div>
		</>
	);
}

export default ScoreBoard;

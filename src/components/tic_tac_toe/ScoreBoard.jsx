import { Refresh } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

function ScoreBoard({ scores, xPlaying }) {
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
					<Button>
						<Refresh />
					</Button>
				</div>
			</div>
		</>
	);
}

export default ScoreBoard;

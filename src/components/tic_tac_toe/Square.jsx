import React from "react";

function Square({ val, selectedSq }) {
	const style = value === "X" ? "box x" : "box o";
	return (
		<>
			<div className={style} onClick={selectedSq}>
				{val}
			</div>
		</>
	);
}

export default Square;

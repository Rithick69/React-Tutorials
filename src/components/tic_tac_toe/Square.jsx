import React from "react";

function Square({ val, onClick }) {
	const style = val === "X" ? "box x" : "box o";
	return (
		<>
			<div className={style} onClick={onClick}>
				{val}
			</div>
		</>
	);
}

export default Square;

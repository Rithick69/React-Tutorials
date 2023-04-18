import React from "react";

function Square({ val, selectedSq }) {
	return (
		<>
			<div className="col-4 square" onClick={selectedSq}>
				{val}
			</div>
		</>
	);
}

export default Square;

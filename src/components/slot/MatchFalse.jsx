import React from "react";

const MatchFalse = (props) => (
	<>
		<div className="slot_inner">
			<h1 style={{ fontSize: "1.5rem" }}>
				{props.x} {props.y} {props.z}
			</h1>
			<h1> This is Not Matching </h1>
			<hr />
		</div>
	</>
);

export default MatchFalse;

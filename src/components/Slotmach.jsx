import React from "react";
import MatchFalse from "./MatchFalse";
import MatchTrue from "./MatchTrue";

const SlotM = (props) => {
	// Object Destructuring

	// let x = props.x;
	// let y = props.y;
	// let z = props.z;

	let { x, y, z } = props;

	if (x === y && y === z) {
		return <MatchTrue x={props.x} y={props.y} z={props.z} />;
	} else {
		return <MatchFalse x={props.x} y={props.y} z={props.z} />;
	}
};

export default SlotM;

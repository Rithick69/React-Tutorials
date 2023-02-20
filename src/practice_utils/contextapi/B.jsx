import React, { useContext } from "react";
// import C from "./C";
import { firstName, secondName } from "./Context";

// Using useContext;

// useContext simplifies the use of Consumer.

const B = () => {
	const fname = useContext(firstName);
	const lname = useContext(secondName);

	return (
		<>
			<h1>
				My Name is {fname} {lname}
			</h1>
		</>
	);
};

export default B;

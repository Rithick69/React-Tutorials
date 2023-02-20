import React from "react";

// Using Context API.

// Here we import the exported Context component.

import { firstName, secondName } from "./Context";

const C = () => {
	return (
		<>
			<firstName.Consumer>
				{/* We use consumer for using the data exported through context. */}
				{/* Consumer only expects a function */}
				{(fname) => {
					return (
						<secondName.Consumer>
							{/* Inorder to use second component as consumer only expects function. */}
							{(lname) => {
								return (
									<h1>
										Hi my name is {fname} {lname}
									</h1>
								);
							}}
						</secondName.Consumer>
					);
				}}
			</firstName.Consumer>
			{/* But, using this technique leads to Nested redundant blocks which will become tedious and confusing
            when we want to pass 100s of data using context */}
			{/* This can be solved using useContext */}
			{/* We will see how that works in component B */}
		</>
	);
};

export default C;

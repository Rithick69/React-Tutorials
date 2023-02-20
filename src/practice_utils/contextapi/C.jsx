import React from "react";

// Here we import the exported Context component.

import { firstName, secondName } from "../../App";

const C = () => {
	return (
		<>
			{/* We use consumer for using the data exported through context. */}
			{/* Consumer only expects a function */}
			<firstName.Consumer>
				{(fname) => {
					{
						/* Inorder to use second component as consumer only expects function. */
					}
					return (
						<secondName.Consumer>
							{(lname) => {
								<h1>
									Hi, my name is {fname} {lname}
								</h1>;
							}}
						</secondName.Consumer>
					);
				}}
			</firstName.Consumer>
		</>
	);
};

export default C;

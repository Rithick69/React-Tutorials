import React from "react";
import { useParams } from "react-router-dom";

// Before whenever we  wanted to pass parameters through url to a certain page,
// we were required to use 'match' which is similar to props inorder to use the parameter passsed through the url.

// const User = (match) => {
// 	return (
// 		<>
// 			<section>
// 				<h1 style={{ margin: "20px 0" }}>
// 					This is {match.params.fname} user page
// 				</h1>
// 			</section>
// 		</>
// 	);
// };

// But now we can use useParams hooks.

const User = () => {
	// the name of the params need to be same as defined in the router
	const { fname, lname } = useParams();
	return (
		<>
			<section>
				<h1 style={{ margin: "20px 0" }}>
					This is {fname} {lname} user page
				</h1>
			</section>
		</>
	);
};

export default User;

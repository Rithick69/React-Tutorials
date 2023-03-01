import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

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
	// useLocation works just like windows.location it returns the path of the current page
	const location = useLocation();
	// useHistory much like useLocation hook also contains the pathname but it is always advisable,
	// to use useLocation hook for getting the pathname as history is mutable or editable.

	// history has a number of methods which can be called as and when required,
	// console log it to view all he available functions.
	// const history = useHistory();

	//Now, we use Navigate instead of history after router v6.
	const navigate = useNavigate();
	return (
		<>
			<section>
				<h1 style={{ margin: "20px 0" }}>
					This is {fname} {lname} user page
				</h1>
				<h4>
					"Type your first name and second name in the url like this :
					/user/fname/lname, to see your name"
				</h4>
				<br />
				<p>My current location is {location.pathname}</p>
				{location.pathname === "/user/rithick/chowdhury" ? (
					<>
						<button
							onClick={() => {
								alert("You are premium user");
							}}
						>
							Click Me
						</button>
						<button
							onClick={() => {
								navigate(-1);
							}}
						>
							Go Back
						</button>
					</>
				) : null}
			</section>
		</>
	);
};

export default User;

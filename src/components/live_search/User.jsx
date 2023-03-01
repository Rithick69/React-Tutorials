import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const User = () => {
	const { fname, lname } = useParams();
	const location = useLocation();
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

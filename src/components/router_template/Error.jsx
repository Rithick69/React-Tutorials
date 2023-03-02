import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
	const navigate = useNavigate();
	return (
		<>
			<div className="setStyle">
				<h1 style={{ marginBottom: "30px" }}>Oops, 404 Page Not Found !!</h1>
				<button
					className="btn btn-lg btn-success"
					onClick={() => {
						navigate("/");
					}}
				>
					Go back{" "}
				</button>
			</div>
		</>
	);
};
export default Error;

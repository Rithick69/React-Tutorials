import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Contact = () => {
	const navigate = useNavigate();
	const goToHome = () => {
		navigate("/");
	};
	return (
		<>
			<section>
				<h1 style={{ marginTop: "20px" }}>This is Contact page</h1>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						width: "200px",
						marginTop: "40px",
						flexDirection: "column",
					}}
				>
					<button onClick={() => goToHome()}>Go to Home page</button>
					<br />
					<Link to="name">My Name</Link>
					<Outlet />
				</div>
			</section>
		</>
	);
};

export default Contact;

import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

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
						width: "300px",
						marginTop: "40px",
						flexDirection: "column",
					}}
				>
					<button onClick={() => goToHome()}>Go to Home page</button>
					<br />
					<NavLink to="name" className="name_style">
						My Name Page --- Click Here
					</NavLink>
					<Outlet />
				</div>
			</section>
		</>
	);
};

export default Contact;

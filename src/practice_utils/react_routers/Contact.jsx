import React from "react";
import { Link, Outlet } from "react-router-dom";

const Contact = () => {
	return (
		<>
			<h1>This is Contact page</h1>
			<Link to="name">My Name</Link>
			<Outlet />
		</>
	);
};

export default Contact;

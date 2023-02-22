import React from "react";

// When we use anchor tags to render other pages, the page automatically reloads.
// to avoid this we will use Link from reacter-router.

import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					width: "400px",
				}}
			>
				{/* to is equivalent to href */}
				<NavLink
					to="/"
					className={({ isActive }) => (isActive ? "active_class" : undefined)}
				>
					Home
				</NavLink>
				<NavLink
					to="/about"
					className={({ isActive }) => (isActive ? "active_class" : undefined)}
				>
					About Us
				</NavLink>
				<NavLink
					to="/contact"
					className={({ isActive }) => (isActive ? "active_class" : undefined)}
				>
					Contact
				</NavLink>
				<NavLink
					to="/contact/name"
					className={({ isActive }) => (isActive ? "active_class" : undefined)}
				>
					My Name
				</NavLink>
				{/* <a href="/about"> About</a>
				<a href="/contact"> Contact</a>
				<a href="/contact/name">My Name </a> */}
			</div>
		</>
	);
};

export default Navbar;

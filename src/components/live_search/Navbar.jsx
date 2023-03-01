import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<>
			<div className="menu_style">
				<NavLink to="/">Home</NavLink>
				<NavLink to="/search">Search</NavLink>
				<NavLink to="/about">About Us</NavLink>
				<NavLink to="/user">User</NavLink>
			</div>
		</>
	);
};

export default Navbar;

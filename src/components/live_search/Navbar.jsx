import React from "react";

// When we use anchor tags to render other pages, the page automatically reloads.
// to avoid this we will use Link from reacter-router.

// This how we can add custom classes to navlink
// <NavLink to="/"
// className={({ isActive }) => (isActive ? "active_class" : undefined)}>
// Home
// </NavLink>

// 'to' is equivalent to 'href'
// NavLink automatically adds an active class to each navitem

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

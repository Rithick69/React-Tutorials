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
				<NavLink to="/">Homes</NavLink>
				<NavLink to="/about">About Us</NavLink>
				<NavLink to="/contact">Contact</NavLink>
				<NavLink to="/services">Services</NavLink>
				<NavLink to="/user">User</NavLink>
			</div>
		</>
	);
};

export default Navbar;

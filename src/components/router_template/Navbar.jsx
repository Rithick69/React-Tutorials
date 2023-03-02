import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<>
			<div className="mainMenu">
				<NavLink to="/" className="menu_style">
					Home
				</NavLink>
				<NavLink to="/about" className="menu_style">
					About Us
				</NavLink>
				<NavLink to="/contact" className="menu_style">
					Contact Us
				</NavLink>
			</div>
		</>
	);
};

export default Navbar;

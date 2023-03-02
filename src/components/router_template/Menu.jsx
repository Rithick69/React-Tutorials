import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Menu = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};

export default Menu;

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

// For shared layout inorder for the parent to route to its child
// components we need to import Outlet component from react router.

const MainHeader = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};

export default MainHeader;

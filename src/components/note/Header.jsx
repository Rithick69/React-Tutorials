import React from "react";
import logo from "./Image/logo.png";

const Header = () => {
	return (
		<>
			<div className="header">
				<img src={logo} alt="logo" width="50" height="40" />
				<h1 style={{ margin: "5px 0" }}>otes</h1>
			</div>
		</>
	);
};
export default Header;

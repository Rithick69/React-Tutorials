import React from "react";
import { Routes, Route } from "react-router-dom";
import Menu from "./Menu";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import "./index.css";

const Routers = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Menu />}>
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="contact" element={<Contact />} />
					<Route path="*" element={<Error />} />
				</Route>
			</Routes>
		</>
	);
};

export default Routers;

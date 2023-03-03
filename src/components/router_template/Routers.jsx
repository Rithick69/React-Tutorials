import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Menu from "./Menu";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
// import Error from "./Error";
import "./index.css";

const Routers = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Menu />}>
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="contact" element={<Contact />} />
					{/* Instead of showing the error page whenever the user enters a
					wrong path in the url we can redirect the user to the Home page */}
					<Route path="*" element={<Navigate to="/" />} />
					{/* <Route path="*" element={<Error />} /> */}
				</Route>
			</Routes>
		</>
	);
};

export default Routers;

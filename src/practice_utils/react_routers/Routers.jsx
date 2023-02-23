import React from "react";
import { Route, Routes } from "react-router-dom";
import MainHeader from "./MainHeader";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import "./index.css";
// React Routers

// React Routers are used for client side rendering.
// To avoid the need to reload page when change tabs etc.

// What is React-Router, anyway?
// Many modern websites are actually made up of a single page,
// they just look like multiple pages because they contain components that render like separate pages.
// These are usually referred to as SPAs - single-page applications. At its core, what React Router does is conditionally render certain components to display depending on the route being used in the URL
// (/ for the home page, /about for the about page, etc.).

// Routes and Route acts as a switch case element whereby the page renders whichever url is selected.

const Routers = () => {
	const Name = () => {
		return <h1 style={{ marginTop: "20px" }}>Hello, I am Rithick</h1>;
	};
	return (
		<>
			{/* Nested Routing */}
			{/* 'index' prop add the component by default to its parent and displays it/ */}
			<Routes>
				<Route path="/" element={<MainHeader />}>
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="contact" element={<Contact />}>
						<Route path="name" element={<Name />} />
					</Route>
					{/* 404 error page */}
					<Route path="*" element={<Error />} />
				</Route>
			</Routes>
		</>
	);
};

export default Routers;
